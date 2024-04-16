<script setup lang="ts">
import { getPokemon, getPokemonAbilities } from '~/datasource'

definePageMeta({
  pageTransition: {
    name: 'scale',
  },
})

const { params } = useRoute()
const { replace } = useRouter()

const store = usePokemonStore()

const {
  data,
  isError,
  isLoading,
} = useQuery({
  queryKey: [ 'pokemon-detail', computed(() => params.id) ],
  queryFn: () => getPokemon(params.id as string),
  enabled: computed(() => !store.$state.id),
})

const abilities = computed(() => {
  return store.$state.abilities?.map(({ ability }) => ability.url)
})

const { data: abilitiesData } = useQuery({
  queryKey: [ 'pokemon-abilities', abilities ],
  queryFn: () => getPokemonAbilities(abilities.value),
  enabled: computed(() => !!abilities.value?.length),
})

watch(data, (value) => {
  if (value)
    store.$patch(value)
})
</script>

<template>
  <Page
    un-space-y-38px
    un-w="sm:col-5 col-12"
  >
    <div
      v-if="isError"
      un-text="center xl gray-500"
      un-font-semibold
      un-mt-100px
      un-flex
      un-justify-center
      un-items-center
      un-gap-sm
    >
      <QIcon name="i-mdi-alert-circle-outline" />

      Não foi possível encontrar o Pokémon
    </div>

    <template v-else>
      <QSkeleton
        v-if="isLoading"
        un-w-full
        un-h-80
      />

      <QCard
        v-else
        un-rounded-lg
        un-shadow="[0_4px_20px_0_rgba(225,225,225)]"
      >
        <QCardSection
          un-column
          un-items-center
          un-space-y-lg
        >
          <QImg
            :src="store.sprites?.other.home.front_default"
            width="200px"
            fit
          />

          <div
            un-font-semibold
            un-text-lg
          >
            {{ capitalize(store.name!) }}
          </div>

          <PokemonType
            :types="store.types"
            disable-dense
          />
        </QCardSection>
      </QCard>

      <QLinearProgress
        v-if="!abilitiesData?.length && !isLoading"
        color="primary"
        reverse
        query
      />

      <QSlideTransition>
        <QCard
          v-if="abilitiesData?.length"
          un-rounded-lg
          un-shadow="[0_4px_20px_0_rgba(225,225,225)]"
        >
          <QCardSection un-space-y-lg>
            <div
              un-font-semibold
              un-text="lg center"
            >
              Habilidades
            </div>

            <QList separator>
              <QItem
                v-for="ability in abilitiesData"
                :key="ability.id"
                un-py-md
              >
                <QItemSection un-text="lg gray-600">
                  {{ ability.effect }}
                </QItemSection>
              </QItem>
            </QList>
          </QCardSection>
        </QCard>
      </QSlideTransition>

      <div
        un-flex
        un-justify-center
        un-pb-lg
      >
        <QBtn
          label="Voltar"
          color="secondary"
          icon="i-mdi-arrow-left"
          no-caps
          rounded
          un-font-bold
          un-text-lg
          flat
          @click="replace('/')"
        />
      </div>
    </template>
  </Page>
</template>

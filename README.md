>  This is a challenge by [Coodesh](https://coodesh.com/)

# Pokémons Challenge

Uma listagem e visualização com todos os Pokémons da Pokeapi.

## Linguagens e Ferramentas

### Linguagem

O TypeScript foi escolhido como base devido à sua concisão e sistema de tipagem forte, o que assegura uma maior qualidade do código.

### Framework

O framework Nuxt foi fundamental para o desenvolvimento do projeto, pois ele oferece recursos abrangentes que facilitam e otimizam a implementação de aplicações, principalmente usando SSR, além de ter a facilidade de desenvolvimento do Vue 3.

### Ferramentas

#### UnoCSS

O [UnoCSS](https://unocss.dev/) foi usado para trazer as mesmas facilidades CSS que o Tailwind também traria, porém com ainda mais qualidade e performance. Ele utiliza presets para compor seus temas, foi escolhido o tema WindiCSS que é o mesmo do Tailwind, dessa forma é possível ter toda a qualidade de estilos do Tailwind mas com a performance do UnoCSS que chega a ser [200x mais que o Tailwind JIT](https://antfu.me/posts/reimagine-atomic-css#performance)

#### Pinia

[Pinia](https://pinia.vuejs.org/) foi adotado como a biblioteca de gerenciamento de estado preferencial para o projeto. Diferente de outras soluções, como Vuex, Pinia oferece uma API mais intuitiva e modular (Option API ou Composition), além de ser o recomendado para as versões 3 tanto do Vue quanto do Nuxt.

#### Quasar

O [Quasar](https://quasar.dev/) foi escolhido como o framework de interface de usuário devido à sua capacidade de oferecer componentes extremamente ricos e responsivos. Garantindo sempre uma UI consistente em todas as plataformas, o Quasar possui diversas funcionalidades que descomplicam o desenvolvimento de componentes.

#### Iconify

Este plugin foi escolhido para permitir que ícones possam ser utilizados no sistema de forma simples em conjunto com o [presetIcons](https://unocss.dev/presets/icons#icons-preset) do UnoCSS, bastando apenas usar:

```html
<i class="i-mdi-clock" />
```

ou:

```html
<QIcon name="i-mdi-clock" />
```

Também é possível usar SVG personalizados como ícones através de [coleções](https://unocss.dev/presets/icons#node-js) do *presetIcons*:

```ts
presetIcons({
  collections: {
    custom: FileSystemIconLoader(
      './src/assets/icons',
      svg => svg.replace(/<svg /, '<svg fill="currentColor" '),
    ),
  },
}),
```

```html
<i class="i-custom-kotas" />
```

#### ESlint

ESLint foi integrado ao projeto como a ferramenta de análise de código para garantir a consistência de estilo do código e manter o código limpo. Foram usadas regras personalizadas e também foi estendida as regras do plugin [antfu](https://github.com/antfu/eslint-config).

#### TanStack Query (vue-query)

[TanStack Query](https://tanstack.com/query/latest/docs/framework/vue/overview) foi usado para gerenciar o estado e o cache das operações de busca de dados. Ele permite realizar buscas, mutações e sincronizações de dados de maneira simples e robusta reduzindo a quantidade de chamadas desnecessárias para a API.

## Estrutura

```md
├── server/
│   ├── api/
│   ├── mappers/
│   ├── services/
│   ├── types/
├── src/
│   ├── assets/
│   ├── components/
│   ├── composables/
│   ├── datasource/
│   ├── layouts/
│   ├── pages/
│   ├── plugins/
│   ├── stores/
│   ├── utils/
│   ├── app.vue
├── nuxt.config.ts
└── uno.config.ts 
```

## Demo

<https://pokemon.douglasblnk.com/>

## Instalação

É necessário ter o [Node.js](https://nodejs.org/) e pnpm (de preferência) instalados em sua máquina.

### Clonando o Repositório

Para começar, clone o repositório do projeto no seu ambiente local usando o Git:

```bash
git clone https://github.com/Douglasblnk/Pokemon
cd Pokemon && pnpm install
```

Para rodar:

```bash
pnpm dev
```

### Extensões

Para melhorar o DX (Developer Experience), instale as seguintes extensões no vscode:

- [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Iconify](https://marketplace.visualstudio.com/items?itemName=antfu.iconify)
- [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)
- [Vue - Official (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
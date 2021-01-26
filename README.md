# Marvel Heroes Book 
> Essa aplicação é um Catálogo de heróis da marvel. 

### Pré requisitos / Prerequisites

Para rodar o projeto deve ter no mínimo a versão atual LTS do node v14.15.1

## Instalando / Installing

Utilizamos o CLI do facebook [create-react-app](https://create-react-app.dev/docs/getting-started/), para criar uma estrutura básica já configurada de um projeto em react.

Para iniciar você deve clonar o repositório, entrar na pasta, rodar o comando para baixar as dependências do node package manager e em seguida subir um servidor local para desenvolvimento rodando em modo watch

```bash
git clone https://github.com/narasakir/marvel.git
cd marvel
npm ci
```

## Desenvolvimento / Developing

Para executar o app no ambiente local, após instalar as dependências você irá precisar executar o script abaixo.

```bash
npm start
```
* O App estará sendo executado no ambiente que estiver informando no terminal. Geralmente é http://localhost:3000

## Arquitetura / Estrutura
Neste projeto construi componentes isolados e módulos que contém seu próprio gerenciamento de estado. Utilizei a arquitetura FLUX para gerenciar os estados utilizando a ContextAPI do React.

```bash
├── package.json
├── public // Arquivos para config do html.
└── src
    ├── assets // imagens, fontes, videos etc...
    │   └── images
    ├── components // Adicionar os componentes isolados ou módulos
    │   ├── ExampleIsolatedComponent // Exemplo de um componente isolado, ideal para reutilizar em componente do tipo módulo.
    │   │   ├── ExampleIsolatedComponent.js
    │   │   ├── ExampleIsolatedComponent.spec.js
    │   │   ├── ExampleIsolatedComponent.style.js
    │   │   └── index.js
    │   ├── ExampleModuleComponent // Exemplo de um componente do tipo módulo com gerenciamento de estado no seu próprio contexto
	│   │   ├── ExampleModuleComponent.hook.js
	│   │   ├── ExampleModuleComponent.hook.spec.js
    │   │   ├── ExampleModuleComponent.js
    │   │   ├── ExampleModuleComponent.spec.js
    │   │   ├── ExampleModuleComponent.style.js
    │   │   ├── _context
    │   │   │   ├── actions.js
    │   │   │   ├── index.js
    │   │   │   ├── reducer.js
    │   │   │   └── reducer.spec.js
    │   │   └── index.js
    ├── pages // Adicionar as páginas do projeto
    ├── config // Configurações do projeto
    ├── constants // Adicionar arquivos de constantes exemplo: HEROES.js
    ├── context // Flux - Está pasta pode ser utilizada em componentes para terem gerenciamento de estado no seu próprio contexto
    │   ├── actions // Adicionar as Actions dos reducers. Ex: currency.js
    │   └── reducers // Adicionar os Reducers Ex: currency.js 
    ├── hooks // Adicionar os custom hooks, Ex: useTag(), useScroll()
    ├── routes // Adicionar as rotas do projeto
    ├── services // Adicionar os serviços que será feito request. Ex: suitability.js
    ├── shared // Adicionar arquivos compartilhados Ex: media.js, fonts.css, global-styles.css
    └── utils // Adicionar arquivos auxiliares. Ex: maths.js, formatters.js, date.js
```

### Dependências / Dependencies

- [React](https://facebook.github.io/react/) - Para a renderização de componentes de view reutilizáveis.
- [React Router](https://reacttraining.com/react-router/) - React Router v4 para criar as rotas no client

- [Styled Components](https://www.styled-components.com) - Criar estilos baseados em componentes, para melhorar a forma de criar a manter CSS. Usamos o seguinte styleguide para criar nossos CSS [CSS Styleguide](https://github.com/felipevolpatto/css-style-guide)

- [Jest/react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) - Ferramentas de testes para interface.

- [Axios](https://www.npmjs.com/package/axios) - bibliotecas para requests

- [Eslint](https://www.npmjs.com/package/eslint) - Biblioteca para code-style 

- [http-proxy-middleware](https://www.npmjs.com/package/http-proxy-middleware) - biblioteca para configurar o proxy para os services da aplicação.

### Deploying / Publishing

TBD

## Testes / Tests

É utilizado o Jest como ferramenta principal para testes unitários acoplando a ele utilizamos também o react-testing-library que é especializado em testes de componentes react.

Para rodar os testes em modo de sincronia (em modo watch) use o seguinte comando
```shell
npm run test
```

Ou se quiser gerar métricas relacionadas a cobertura dos testes nos projetos utilize apenas

```shell
npm run test:coverage
```

O último comando vai criar uma pasta na raiz do seu projeto com o nome "coverage". Abra o index.html dentro de ***coverage/Icov-report*** no browser da sua preferência.

## Scripts

Iniciar servidor de desenvolvimento em modo watch na porta 3000. http://localhost:3000

```shell
npm start
```

Criar build da aplicação

```shell
npm run build
```

Executa testes e gerar metricas de cobertura de código

```shell
npm run test:coverage
```

Executa o lint no projeto

```shell
npm run lint
```


Construido por @Raphael Narasaki
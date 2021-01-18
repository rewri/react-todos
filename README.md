# IGTI Bootcamp - Desenvolvedor Full Stack
## Desafio do Módulo 3

Criar uma aplicação com React para visualizar tarefas cumpridas/não cumpridas baseando-se em ano/mês, com a possibilidade de cumprir/descumprir tarefas (opcional), conforme regras abaixo:

1. Defina uma pasta base, como por exemplo, react-todos.

2. Na pasta base, crie o projeto com o pacote create-react-app ou utilize o projeto _react-projeto-base, já disponibilizado pelo professor no fórum do módulo. Esta última é a forma recomendada pelo professor, pois possui uma versão estável do React (16.3.1). A versão 17.x mostrou estar instável nos meus testes, atualmente (dez/2020). Recomendo que a pasta se chame frontend.

3. Converta o projeto base para utilizar Functional Components com Hooks.

4. Instale o backend fornecido pelo professor no Fórum de Avisos. O backend consiste no arquivo backend.json, servido pelo pacote json-server. Este arquivo será modificado pelo professor a cada oferta. Portanto, as imagens contidas neste documento não refletem necessariamente o conteúdo do arquivo de vocês. Para instalar, basta descompactar a pasta backend dentro da pasta base, acessá-la via terminal de comandos e executar npm install ou yarn. Assim, todas as dependências serão instaladas. Para executar o backend, digite o comando npm start ou yarn start. O backend será executado na porta 3001, e poderá ser acessado através de http://localhost:3001/todos.

5. Estude o backend. Acesse http://localhost:3001/todos e verifique como os dados estão dispostos.

6. A interface fica a critério do aluno. O foco da avaliação serão os cálculos e conceitos relacionados a React Hooks.

7. Implementação opcional (não será cobrada no questionário). Ao clicar em uma tarefa, cumpri-la ou descumpri-la, refletindo a ação tanto no backend quanto no frontend.

8. Opcional. Para implementar a mudança de status de cumprimento da tarefa (done = true para done = false e vice-versa), utilize a biblioteca axios e realize uma requisição do tipo PUT em http://localhost:3001/todos/:id_da_tarefa. Envie no corpo requisição os mesmos dados da tarefa original, removendo o id e trocando apenas o valor de done. Utilize axios.put para isso.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
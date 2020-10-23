# InprodiTestComponent
Este es el test final de la entrevista de trabajo de **Inprodi**, donde se pide la realización de un componente **TodoList** usando react.


## Instalación
```sh
$ git clone https://github.com/martline1/InprodiTestComponent.git
$ cd InprodiTestComponent
$ npm i
$ npm run dev
```
Después, se tiene que revisar el proyecto en [localhost:3000](localhost:3000)

## ¿Cómo revisar el código?
Todo el código se encuentra dentro de `./src/*`, y siguiendo el paradigma de *Nextjs*, las rutas de la aplicación web están dentro de `./src/pages/*`, donde solamente encontraremos la ruta de la vista principal, `./src/pages/index.js`, en esa ruta, lo único que se hace es exportar un componente que engloba el título el el componente que se solicitó.

**Es en `./src/Components/MainPageView.jsx` donde está localizado el componente que utiliza nuestro TodoList**, ahí se usa el **TodoListContainer**.

El componente que se pide en el test está en `./src/Components/TodoListContainer`, donde nos encontramos con un componente lógico (tiene sufijo Container) que envía los items al hijo (TodoList) así como la función para actualizar el estado.

## ¿Cómo se hizo?
Este proyecto se realizó con **React** y **Nextjs** además de implementar una metodología de *JSS* para definir los estilos como objetos de JavaScript, se usó la librería de componentes de MaterialUI, para la aplicación de estilos globales, el uso de un tema, y estilos que siguen la normativa de diseño **Material Design**.

Además, este proyecto tiene **husky**, para ejecutar scripts de npm cada que se hace un commit y cada que se hace un push, esto para agregar un linteado de la aplicación, cuyas reglas se encuentran en `./.eslintrc.js`

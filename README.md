# Burger Queen

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Diagrama de Flujo](#5-diagrama-de-flujo)
* [6. Test de Usabilidad](#5-test-de-usabilidad)
* [7. Integrantes](#6-integrantes)

***

## 1. Preámbulo

[React](https://es.reactjs.org/), [Angular](https://angular.io/) y [Vue](https://vuejs.org/)
son algunos de los _frameworks_ y _librerías_ de JavaScript más utilizados por
lxs desarrolladorxs alrededor del mundo, y hay una razón para eso.
En el contexto del navegador, [_mantener la interfaz sincronizada con el estado
es difícil_](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445).
Al elegir un _framework_ o _librería_ para nuestra interfaz, nos apoyamos en una
serie de convenciones e implementaciones _probadas_ y _documentadas_ para
resolver un problema común a toda interfaz web. Esto nos permite concentrarnos
mejor (dedicar más tiempo) en las caractrísticas _específicas_ de
nuestra aplicación.

Cuando elegimos una de estas tecnologías no solo importamos un pedacito de
código para reusarlo (lo cuál es un gran valor per se), si no que adoptamos una
**arquitectura**, una serie de **principios de diseño**, un **paradigma**, unas
**abstracciones**, un **vocabulario**, una **comunidad**, etc...

Como desarrolladora Front-end, estos kits de desarrollo pueden resultarte
de gran ayuda para implementar rápidamente características de los proyectos en
los que trabajes.

## 2. Resumen del proyecto

Esta vez tenemos un proyecto 100% por encargo. Si bien siempre puedes (y debes)
hacer sugerencias de mejoras y/o cambios, muchas veces trabajarás en proyectos
en los que primero hay que asegurarse de cumplir con lo requerido.

Un pequeño restaurante de hamburguesas, que está creciendo, necesita una
interfaz en la que puedan tomar pedidos usando una _tablet_, y enviarlos
a la cocina para que se preparen ordenada y eficientemente (a través de un
  _backend_ del que nos darán detalles más adelante).

![burger-queen](https://user-images.githubusercontent.com/110297/42118136-996b4a52-7bc6-11e8-8a03-ada078754715.jpg)

Esta es la información que tenemos del cliente:

> Somos **Burguer Queen**, una cadena de comida 24hrs.
>
> Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida y, para
> seguir creciendo, necesitamos un sistema que nos ayude a tomar los pedidos de
> nuestros clientes.
>
> Tenemos 2 menús: uno muy sencillo para el desayuno:
>
> | Ítem                      |Precio $|
> |---------------------------|------|
> | Café americano            |    5 |
> | Café con leche            |    7 |
> | Sandwich de jamón y queso |   10 |
> | Jugo de frutas natural              |    7 |
>
> Y otro menú para el resto del día:
>
> | Ítem                      |Precio|
> |---------------------------|------|
> |**Hamburguesas**           |   **$**   |
> |Hamburguesa simple         |    10|
> |Hamburguesa doble          |    15|
> |**Acompañamientos**        |   **$**   |
> |Papas fritas               |     5|
> |Aros de cebolla            |     5|
> |**Para tomar**             |   **$**   |
> |Agua 500ml                 |     5|
> |Agua 750ml                 |     7|
> |Bebida/gaseosa 500ml       |     7|
> |Bebida/gaseosa 750ml       |     10|
>
> **Importante:** Los clientes pueden escoger entre hamburguesas de res,
> de pollo, o vegetariana. Además, por $ 1 adicional, pueden agregarle queso
> o huevo.
>
> Nuestros clientes son bastante indecisos, por lo que es muy común que cambien
>el su pedido varias veces antes de finalizarlo.

La interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno
con todos sus _productos_. El usuario debe poder ir eligiendo qué _productos_
agregar y la interfaz debe ir mostrando el _resumen del pedido_ con el
costo total.

![out](https://user-images.githubusercontent.com/110297/45984241-b8b51c00-c025-11e8-8fa4-a390016bee9d.gif)

<h1 align="center">Burger Queen - Sistema de pedidos<img src="https://media.giphy.com/media/eBb2W1OYVHou9l6W7N/giphy.gif" width="80" height="80" /></h1>

### 5. Diagrama de Flujo:

**Mozo:** Inicio del Flujo de pedido:

![Screenshot](https://github.com/kelmita22/LIM014-burger-queen/blob/main/src/readme/H1.png)

**Cocina:** Inicio del Flujo de cocina:

![Screenshot](https://github.com/kelmita22/LIM014-burger-queen/blob/main/src/readme/H2.png)

**Mozo:** Termino de flujo de cocina:

![Screenshot](https://github.com/kelmita22/LIM014-burger-queen/blob/main/src/readme/H3.png)

### 6. Test de usabilidad:

Se realizo un test a 5 personas sobre la usabilidad de la red social y su diseño, su feedback fue el siguiente:

![Screenshot](https://github.com/kelmita22/LIM014-burger-queen/blob/main/src/readme/test1.png)

![Screenshot](https://github.com/kelmita22/LIM014-burger-queen/blob/main/src/readme/test2.png)

![Screenshot](https://github.com/kelmita22/LIM014-burger-queen/blob/main/src/readme/test3.png)

### 7. Prototipo Final:

#### Tablet

**Home**

![Screenshot](https://github.com/kelmita22/LIM014-burger-queen/blob/main/src/readme/pedidos%20home.jpeg)

**Mozo:**

![Screenshot](https://github.com/kelmita22/LIM014-burger-queen/blob/main/src/readme/pedidos%20mozo.jpeg)

**Cocina**

![Screenshot](https://github.com/kelmita22/LIM014-burger-queen/blob/main/src/readme/Pedidos%20cocina.png)

### 7. Proyecto Tríos:

- [Ana Fernández](https://github.com/Afernandezc435/ 'Ana Fernández')
- [Erika Gonzalez](https://github.com/erikagonza25/ 'Erika Gonzalez')
- [Kelly Márquez](https://github.com/kelmita22 'Kelly Márquez')

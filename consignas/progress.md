# Progress
***To-do* list from assignments**

---

1. [Progress](#progress)
   1. [CRUD Episodio I](#crud-episodio-i)
      1. [Routes](#routes)

---

## CRUD Episodio I

### Routes

* [X] ~~*`/` <br>*~~ [15:27  -  18/07]
>Se deberán mostrar los productos separados en dos secciones. Los últimosvisitados y los productos en oferta.

* [X] ~~*`/products` <br>*~~ [15:27  -  18/07]
>Se deberán listar todos los productos presentes en la base de datos JSON.

* [X] ~~*`/products/:id` <br>*~~ [15:27  -  18/07]
>Detalle de producto. Cada producto deberá contar con dos botones deacción: BORRAR y MODIFICAR.

* [X] ~~*`/products/create` <br>*~~ [15:27  -  18/07]
>Mostrará el formulario de creación para un producto.

* [X] ~~*`/products/` <br>*~~ [15:27  -  18/07]
>Deberá recibir los datos del formulario de creación.

* [X] ~~*`/products/edit/:id` <br>*~~ [15:27  -  18/07]
>Botón MODIFICAR: modificará al producto correspondiente en la base de datos JSON.

* [X] ~~*`/products/` <br>*~~ [15:27  -  18/07]
>Deberá recibir los datos del formulario de edición.

* [ ] **`/products/:id`** <br>
>Botón BORRAR: eliminará al producto de la base de datos JSON.


A continuación se detalla lo que deberá mostrar cada ruta:
* Cada producto en la Home de nuestro sitio​ ​(/), ​deberá llevar a la sección dedetalle​ (​/products/:id​) del producto correspondiente al hacer click con elmouse sobre el mismo. Donde ​id​ es el Id del producto que seleccionamos.
* En la sección Detalle de producto se deberá mostrar:
  * Pestaña del navegador con el nombre del producto.
  * Nombre del producto.
  * Imagen del producto.
  * Descripción del producto.
  * Precio real, descuento y precio final.
  * Si el producto no tiene descuento, mostrar solo el precio real.
  * Los precios deberán mostrarse con separador de miles.
* En la sección de Detalle de producto se deberá incluir los dos botones deacción para cada producto: MODIFICAR y BORRAR.
* La aplicación deberá contar con las 7 rutas de un ABM:
  * Listado de productos.
  * Formulario de carga.
  * Recepción del formulario de carga.
  * Formulario de edición.○Recepción del formulario de edición.○Eliminación de productos.
* Para las rutas de recepción de formularios y borrado, nos solicitan quesimplemente mostremos, por ahora, un mensaje de la acción.


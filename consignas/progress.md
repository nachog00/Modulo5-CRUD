# Progress
***To-do* list from assignments**

---

- [Progress](#progress)
  - [CRUD Episodio I](#crud-episodio-i)
    - [Routes](#routes)
    - [Requerimientos](#requerimientos)
  - [CRUD Episodio II](#crud-episodio-ii)
    - [**MD - Paso 1**](#md---paso-1)
    - [**MD - Paso 2**](#md---paso-2)
    - [**MD - Paso 3**](#md---paso-3)

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

* [X] ~~***`/products/:id`** <br>*~~ [16:41  -  18/07]
>Botón BORRAR: eliminará al producto de la base de datos JSON.

### Requerimientos

A continuación se detalla lo que deberá mostrar cada ruta:
* Cada producto en la Home de nuestro sitio​ ​(/), ​deberá llevar a la sección de detalle​ (​/products/:id​) del producto correspondiente al hacer click con el mouse sobre el mismo. Donde ​id​ es el Id del producto que seleccionamos.
* En la sección **Detalle** de producto se deberá mostrar:
  * Pestaña del navegador con el nombre del producto.
  * Nombre del producto.
  * Imagen del producto.
  * Descripción del producto.
  * Precio real, descuento y precio final.
  * Si el producto no tiene descuento, mostrar solo el precio real.
  * Los precios deberán mostrarse con separador de miles.
* En la sección de Detalle de producto se deberá incluir los dos botones de acción para cada producto: MODIFICAR y BORRAR.
* La aplicación deberá contar con las 7 rutas de un ABM:
  * Listado de productos.
  * Formulario de carga.
  * Recepción del formulario de carga.
  * Formulario de edición.
  * Recepción del formulario de edición.
  * Eliminación de productos.
* Para las rutas de recepción de formularios y borrado, nos solicitan que simplemente mostremos, por ahora, un mensaje de la acción.


## CRUD Episodio II

[PDF](/consignas/M05C05%20-%20Ejercitaci%C3%B3n%20CRUD%20Episodio%20II%20(1).pdf)

---
### **MD - Paso 1** 

Tomando como referencia la ejercitación de la clase anterior, debemos codificar el formulario de carga de un producto,  el cual deberáactualizar el archivo JSON con los datos del nuevo producto ingresado. Dicho formulario será accedido desde la ruta:
* [X] ~~*`/products/create`*~~ [17:35  -  24/07]
<br> y una vez se procese dicho forlmulario, redirigir a:

* [X] ~~*`/products`*~~ [17:35  -  24/07]
<br>donde debemos mostrar todos los productosde nuestro JSON. Tengamos encuenta que debemos incluir la posibilidad de subiruna imagen del producto.

---
### **MD - Paso 2**

Además de la creación, debemos añadir a nuestra aplicación la opción de editar un producto ya agregado en nuestro JSON. Para ello deberemo sutilizar la siguiente ruta para enviar los datos modificados al servidor: 
* [ ] `/products/edit/:id`
<br>Recordemos que para poder acceder a la opción de editar teníamos, en la vista deldetalle del producto, 
* [ ] `el botón MODIFICAR`
  
---
### **MD - Paso 3** 

El siguiente paso es poder eliminar un determinado producto de nuestro JSON, para lo cual usaremos la siguiente ruta 
* [ ] `/products/:id`
<br>donde `id` es el identificador que permite reconocer unívocamente a un determinado producto.

Recordemos que para poder acceder a la opción de eliminar teníamos en la vista del detalle del producto 
* [ ] `el botón BORRAR`.


# Introducción rápida a Backbone.js
    
Backbone.js es una libreria de javascript que permite agilizar y sistematizar el desarrollo de aplicaciones.
Para esta tarea, utiliza la arquitectura MVC

## Elementos:

 - Backbone.Events: Eventos custom!
 - Backbone.Model: Un conjunto de datos
 - Backbone.Collection: Un conjunto de modelos
 - Backbone.Router: Relación entre rutas y acciones.
 - Backbone.View: Una pieza reusable de UI
 - Client-side Templates: Templates para las vistas, en formato erb

## Modelos

Heredan de Events, tienen varios atributos
¿Que es Backbone.sync?
El metodo set dispara el evento `change`, se puede llamar con notacion de objeto, `{clave: 'valor'}` o directamente con dos parametros



## Events

### Methods

   - `on` bind event to callback function
   - `once` bind event to event, to be triggered only one time
   - `off` remove one or many callback for event
   - `trigger` Trigger one or many events, firing all callbacks

## Templates

Se definen en un tag `script`, y su tipo es `text/template`.

 * Ver como se definen los templates (Place holders?) Despejado! se utiliza el formato erb
 

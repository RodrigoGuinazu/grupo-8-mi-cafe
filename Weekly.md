** :: Sprint 4 (20201218) :: **

+ Se abordarán las tarjetas 'pendientes' y 'en proceso' del Sprint 3 (Vistas Creación y Edición de productos, ruteo de carpeta 'src'), antes de iniciar las tareas del Sprint 4.

+ Se dividieron las tareas del Sprint 4 de la siguiente manera:
  + FS: Baja de producto (métodos HTTP) + JSON (productos y usuarios).
  + RS: Listado y detalle de producto (métodos HTTP).
  + RG: Modificación de producto (métodos HTTP).
  + AV: Alta de productos (métodos HTTP).

+ Se realizará una nueva reunión, para revisar el avance las tareas mencionadas.

=======

Weekly (20201229)

+ Se resolvieron las tarjetas 'pendientes' y 'en proceso' del Sprint 3 (Vistas Creación y Edición de productos, ruteo de carpeta 'src').

+ Se mantiene el avance de las tareas del Sprint 4 de la siguiente manera:
  + FS: Baja de producto (métodos HTTP) [En curso] + JSON (productos y usuarios) [Completado].
  + RS: Listado y detalle de producto (métodos HTTP) [En curso].
  + RG: Modificación de producto (métodos HTTP) [En curso].
  + AV: Alta de productos (métodos HTTP) [En curso].
+ Se decidió generar los workflows de cada usuario, para detectar painpoints y vistas adicionales a las planteadas en las pautas de los Sprints [Completado].
+ Se incorporará un botón 'Crear' en 'Listado de producto' que sólo será visible para el Responsable del sitio.
+ Se incorporará un botón 'Editar' en 'Detalle de producto' que sólo será visible para el Responsable del sitio.
+ Se realizará una nueva reunión, para revisar el avance las tareas mencionadas.

=======

Weekly (20210105)

+ Se resolvieron ciertos stoppers en el avance de las tareas del Sprint 4:
  + FS: Baja de producto (métodos HTTP), se logró eliminar un producto del JSOn y de la vista 'Listado de producto' + JSON (productos y usuarios) [Completado].
  + RS: Listado y detalle de producto (métodos HTTP), se logró que al seleccionar un producto se visualice el detalle del mismo [Completado].
  + RG: Modificación de producto (métodos HTTP), se logró que el ID del producto (no la posición del Array) se refleje en la URL correspondiente [Completado].
  + AV: Alta de productos (métodos HTTP), se logró generar la numeración secuencial de los productos al crearlos desde la vista 'Crear producto' [Completado].
+ Se realizará la Retrospectiva, con las acciones de mejora y mitigación, desarrolladas durante el Sprint 4 [En curso].

=======

** :: Sprint 5 (20210108) :: **

+ Se abordarán las tarjetas 'pendientes' del Sprint 4 (Login y #404), antes de iniciar las tareas del Sprint 5.

+ Se dividieron las tareas del Sprint 5 de la siguiente manera:

  + FS: Autenticación Login + Estructura de archivos y carpetas.
  + RS: Vista de Perfil de Usuario + Transformar Multer en Middleware.
  + RG: Incorporar MULTER a imagen de perfil de usuario + Revisión de JSON de usuarios (campos).
  + AV: Ruteo de usuarios logueados y no logueados (Session) + Vista de Registro de usuarios (campos).

+ Se realizará una nueva reunión, para revisar el avance las tareas mencionadas.

=======

Weekly (20210116)

+ Se están resolviendo las tarjetas 'pendientes' del Sprint 4 (Login y #404) y las correcciones del mismo, antes de iniciar las tareas del Sprint 5.

+ Se dividieron las tareas del Sprint 5 de la siguiente manera:

  + FS: Autenticación Login (en curso) + Estructura de archivos y carpetas (en curso).
  + RS: Vista de Perfil de Usuario  (en curso)+ Transformar Multer en Middleware  (en curso).
  + RG: Incorporar MULTER a imagen de perfil de usuario  (en curso) + Revisión de JSON de usuarios (campos) (en curso).
  + AV: Ruteo de usuarios logueados y no logueados (Session) (en curso)+ Vista de Registro de usuarios (campos) (en curso).

+ Se realizará una nueva reunión, para revisar el avance las tareas mencionadas.

=======

Weekly (20210117)
+ Se están resolviendo las tarjetas 'pendientes' del Sprint 4 (Login y #404) y las correcciones del mismo.

+ Se dividieron las tareas del Sprint 5 de la siguiente manera:

  + FS: Autenticación Login (detenido: no se logró aplicar Session) + Estructura de archivos y carpetas (Completado).
  + RS: Vista de Perfil de Usuario (en curso) + Transformar Multer en Middleware (Completado).
  + RG: Incorporar MULTER a imagen de perfil de usuario (Completado) + Revisión de JSON de usuarios (campos) (Completado).
  + AV: Ruteo de usuarios logueados y no logueados (Session) (detenido: ídem Login) + Vista de Registro de usuarios (campos) (Completado).

+ Se decidió desdoblar la vista de Registro de usuario, e incorporar los campos opciones a la vista de Perfil de usuario, para su edición.
+ MULTER de PRODUCTOS y USUARIOS fueron transformados en middleware, y se aplicaron en las rutas correspondientes.
+ Se generó la lógica en el 'Buscador', pero aún no se logró que devuelva los resultados de la misma.
+ Se generaron las vistas de las páginas del HOME ('Conoceme', 'Viajá', y 'Encontralo'), con su CSS.
+ Se incorporó un array random de productos como 'Sugeridos', visible en 'Detalle de productos' y 'Carrito'.

+ Se realizará una nueva reunión, para revisar el avance las tareas mencionadas.

=======

Weekly (20210119)

+ Se resolvieron las tarjetas 'pendientes' del Sprint 4 (Login y #404) y las correcciones del mismo.

+ Se dividieron las tareas del Sprint 5 de la siguiente manera:

  + FS: Autenticación Login (Completado: se logró aplicar Session) + Estructura de archivos y carpetas (Completado).
  + RS: Vista de Perfil de Usuario (Completado: se incorporó el botón 'Editar' y 'Logout' para todos los perfiles. En el caso de Admin, además se presenta el botón 'Crear producto') + Transformar Multer en Middleware (Completado).
  + RG: Incorporar MULTER a imagen de perfil de usuario (Completado) + Revisión de JSON de usuarios (campos) (Completado).
  + AV: Ruteo de usuarios logueados y no logueados (Session) (Completado: ídem Login) + Vista de Registro de usuarios (campos) (Completado).

+ Se hizo partial de 'Errores' para 'Login' y 'Formulario de registro', y se aplicó etiqueta EJS, con su correspondiente CSS.
+ Se incorporó la etiqueta del usuario logueado (apoyado en Session). La misma, replica la dirección del usuario [Navbar].
+ Se configuró la visibilidad de los botones 'Crear' y 'Editar' producto, para Admin.
+ Se seteó el acceso de las rutas (Session) en relación al tipo de usuario y sus permisos.
+ Queda pendiente para revisar la lógica de la cookie 'Recordame' [Sprint 6].
+ Queda a revisión y mejora la vista y lógica de 'Carrito'.
+ Se realizará una nueva reunión, para revisar el avance las tareas mencionadas.

+ Se realizará la Retrospectiva, con las acciones de mejora y mitigación, desarrolladas durante el Sprint 5 [En curso].

=======

** :: Sprint 6 (20210121) :: **

+ Se abordarán las tarjetas 'pendientes' del Sprint 5, antes de iniciar las tareas del Sprint 6.

+ Se plasmaron las tareas del Sprint 6 en Trello. Dado que aún no se conoce la magnitud de las mismas, están asignadas a todo el equipo.

+ Se realizará una nueva reunión, para revisar el avance las tareas mencionadas.

=======

Daily (20210123)

+ Se inició la generación del Diagrama de relaciones.

=======

Daily (20210124)

+ Se continúa con la generación del Diagrama de relaciones, para presentar borrador el lunes 25/01/2021.

=======

Daily (20210126)

+ Se aplican las correcciones del 25/01/2021 al Diagrama de relaciones, para volver a presentar borrador.

=======

Daily (20210129)

+ Se aplican las correcciones del 27/01/2021 al Diagrama de relaciones, para volver a presentar borrador.

=======

Daily (20210130)

+ Se abordan las tarjetas pendientes y correcciones del Sprint 5

+ Se aguardan las correcciones del al Diagrama de relaciones, para poder avanzar con las tareas del Sprint 6.

=======

Daily (20210131)

+ Se continúa en la resolución de las tarjetas pendientes y correcciones del Sprint 5.

=======

Daily (20210203)

+ Se resolvieron las tarjetas pendientes del Sprint 5 (Vistas pendientes).

+ Se corrigieron las PK y FK.

+ Se avanzó con la creación de los Modelos y las Relaciones.

+ Se empezaron a generar los scripts para poblar las tablas.

+ Se creó la versión final del DER, y se generó archivo .PNG del mismo.

+ Al final del Sprint, se abordarán cuestiones pendientes de lógica y estilos.

=======

Daily (20210204)

+ Se realizó una revisión general del DER.

+ Se terminaron de generar los scripts para poblar las tablas.

+ Se corrigieron los modelos, con sus tipos de datos y relaciones.

=======

Daily (20210205-20210209)

+ Se resolvieron los siguientes STOPPERS:
  + CRUD Usuario: se generó la lógica completa del Modelo User para Crear, Leer, Editar, y Eliminar.
  
  + CRUD producto: se generó la lógica completa del Modelo Product para Leer, y Eliminar. En el caso del Modelo Product_Attribute, queda pendiente completar la relación con los Métodos Crear, y Editar; dado que no se lograr vincular al PRODUCTO con los ATRIBUTOS relacionados.

+ Queda pendiente resolver algunas correcciones del Sprint 5 (buscador, cookies, etc).

+ Se realizará la Retrospectiva, con las acciones de mejora y mitigación, desarrolladas durante el Sprint 6 [En curso].

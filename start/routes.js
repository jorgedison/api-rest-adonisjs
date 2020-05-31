'use strict'

const Route = use('Route')

Route.group(() => {
  Route.post('usuarios/', 'UserController.store');
  Route.post('usuarios/login', 'UserController.login');
  Route.get('usuarios/', 'UserController.index');
  Route.get('proyectos', 'ProyectoController.index').middleware('auth');
  Route.post('proyectos', 'ProyectoController.create').middleware('auth');
  Route.patch('proyectos/:id', 'ProyectoController.update').middleware('auth');
  Route.delete('proyectos/:id', 'ProyectoController.destroy').middleware('auth');
}).prefix('api/v1/');
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap/alert';

import { RootComponent } from './components/root/root.component';

import { UsuarioGuard } from './guards/usuario.guard';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ModalComponent } from './components/modal/modal.component';

import { DataService } from './services/data.service';
import { CiudadService } from './services/ciudad.service';

import { IndexComponent } from './pages/index/index.component';
import { AdminCarrerasComponent } from './pages/admin-carreras/admin-carreras.component';
import { CiudadSeleccionComponent } from './pages/ciudad-seleccion/ciudad-seleccion.component';
import { CiudadTransaccionComponent } from './pages/ciudad-transaccion/ciudad-transaccion.component';
import { AdminAlumnosComponent } from './pages/admin-alumnos/admin-alumnos.component';
import { AdminProfesoresComponent } from './pages/admin-profesores/admin-profesores.component';
import { AdminGruposComponent } from './pages/admin-grupos/admin-grupos.component';
import { AdminGruposDetalleComponent } from './pages/admin-grupos-detalle/admin-grupos-detalle.component';
import { CiudadComercioComponent } from './pages/ciudad-comercio/ciudad-comercio.component';
import { ProfesorCiudadComponent } from './pages/profesor-ciudad/profesor-ciudad.component';

const routes:Route[] = [
  {path: 'index', component: IndexComponent},
  {path: 'carreras', redirectTo: '/index'},
  {path: 'carreras/:id', redirectTo: '/index'},
  {path: 'ciudades', component: CiudadSeleccionComponent, canActivate: [UsuarioGuard]},
  {path: 'ciudades/comercio', component: CiudadComercioComponent, canActivate: [UsuarioGuard]},
  {path: 'ciudades/:cityId/intercambio', component: CiudadTransaccionComponent, canActivate: [UsuarioGuard]},
  {path: 'juegos/detalle', redirectTo: '/index'},
  {path: 'about', redirectTo: '/index'},
  {path: 'admin/alumnos', component: AdminAlumnosComponent, canActivate: [UsuarioGuard]},
  {path: 'admin/profesores', component: AdminProfesoresComponent, canActivate: [UsuarioGuard]},
  {path: 'admin/carreras', component: AdminCarrerasComponent, canActivate: [UsuarioGuard]},
  {path: 'admin/grupos', component: AdminGruposComponent, canActivate: [UsuarioGuard]},
  {path: 'admin/grupos/detalle', component: AdminGruposDetalleComponent, canActivate: [UsuarioGuard]},
  {path: 'profesor/:cityId/ciudad', component: ProfesorCiudadComponent, canActivate: [UsuarioGuard]},
  {path: '**', redirectTo: '/index'},
]

@NgModule({
  declarations: [
    RootComponent,
    SidebarComponent,
    IndexComponent,
    AdminCarrerasComponent,
    ModalComponent,
    CiudadSeleccionComponent,
    CiudadTransaccionComponent,
    AdminAlumnosComponent,
    AdminProfesoresComponent,
    AdminGruposComponent,
    AdminGruposDetalleComponent,
    CiudadComercioComponent,
    ProfesorCiudadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    CollapseModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    PopoverModule.forRoot(),
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
  ],
  providers: [DataService, CiudadService],
  bootstrap: [RootComponent]
})
export class AppModule { }

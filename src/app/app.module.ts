import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// imports de firebase

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { EnviarCorreoComponent } from './auth/enviar-correo/enviar-correo.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CreartrabajosComponent } from './principales/creartrabajos/creartrabajos.component';
import { VertrabajosComponent } from './principales/vertrabajos/vertrabajos.component';
import { NavbarComponent } from './shared/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    EnviarCorreoComponent,
    FilterPipe,
    CreartrabajosComponent,
    VertrabajosComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    // import de firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { MenuComponent } from './components/menu/menu.component';
import { OfferComponent } from './components/offer/offer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateMenuComponent } from './components/menu/create-menu/create-menu.component';
import { EditMenuComponent } from './components/menu/edit-menu/edit-menu.component';
import { ListMenuComponent } from './components/menu/list-menu/list-menu.component';
import { ToastrModule } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ListOfferComponent } from './components/offer/list-offer/list-offer.component';
import { EditOfferComponent } from './components/offer/edit-offer/edit-offer.component';
import { CreateOfferComponent } from './components/offer/create-offer/create-offer.component';
import { CreateUserComponent } from './components/user/create-user/create-user.component';
import { ListUserComponent } from './components/user/list-user/list-user.component';
import { EdotUserComponent } from './components/user/edot-user/edot-user.component';
import { LoginComponent } from './components/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MenuComponent,
    OfferComponent,
    CreateMenuComponent,
    EditMenuComponent,
    ListMenuComponent,
    ListOfferComponent,
    EditOfferComponent,
    CreateOfferComponent,
    CreateUserComponent,
    ListUserComponent,
    EdotUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, // Required for animations
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

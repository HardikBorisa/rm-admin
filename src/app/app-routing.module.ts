import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { OfferComponent } from './components/offer/offer.component';
import { UserComponent } from './components/user/user.component';
import { CreateMenuComponent } from './components/menu/create-menu/create-menu.component';
import { EditMenuComponent } from './components/menu/edit-menu/edit-menu.component';
import { ListMenuComponent } from './components/menu/list-menu/list-menu.component';
import { ListOfferComponent } from './components/offer/list-offer/list-offer.component';
import { CreateOfferComponent } from './components/offer/create-offer/create-offer.component';
import { EditOfferComponent } from './components/offer/edit-offer/edit-offer.component';
import { ListUserComponent } from './components/user/list-user/list-user.component';
import { CreateUserComponent } from './components/user/create-user/create-user.component';
import { EdotUserComponent } from './components/user/edot-user/edot-user.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './components/auth.guard';

const routes: Routes = [
  { path : 'login', component: LoginComponent},
  { path: '', component: UserComponent, canActivate: [AuthGuard],
  children:[
    { path: '', redirectTo: 'list', pathMatch: 'full' }, // Redirect /menu to /menu/create
    { path: 'list', component: ListUserComponent},{
    path: 'create', component: CreateUserComponent
  },{
    path: 'edit/:id', component: EdotUserComponent
  }]
   },

  { path: 'offer', component: OfferComponent,canActivate: [AuthGuard],
  children:[
    { path: '', redirectTo: 'list', pathMatch: 'full' }, // Redirect /menu to /menu/create
    { path: 'list', component: ListOfferComponent },{
    path: 'create', component: CreateOfferComponent
  },
{
  path: 'edit/:id', component: EditOfferComponent

}]
   },
  { path: 'menu', component: MenuComponent,canActivate: [AuthGuard],
    children:[
      { path: '', redirectTo: 'list', pathMatch: 'full' }, // Redirect /menu to /menu/create
      { path: 'list', component: ListMenuComponent },{
      path: 'create', component: CreateMenuComponent
    },
  {
    path: 'edit/:id', component: EditMenuComponent

  }]
   },
  { path: '**', redirectTo: '/' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

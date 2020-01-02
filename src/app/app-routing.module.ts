import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PagesComponent } from './pages/pages.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';



const routes: Routes = [
  {path:"",redirectTo:'home',pathMatch:'full'},
  {path:'navbar',component:NavbarComponent},
  {path:'home',component:HomeComponent},
  {path:'pages',component:PagesComponent},
  {path:'about',component:AboutComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'footer',component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

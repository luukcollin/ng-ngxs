import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [{
    component: HomeComponent, path: "home"
},
{ component: ContactComponent, path: "contact" }];

import { UserlistService } from './userlist.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NinjasService } from './services/ninjas.service';
import { SingleService } from './services/single.service';
import { RegisterService } from './register.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NinjaComponent } from './ninja/ninja.component';
import { SingleComponent } from './single/single.component';
import { NinjandetailsComponent } from './ninjandetails/ninjandetails.component';
import { DataService } from './data.service';
import { SelectedComponent } from './selected/selected.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { UserlistComponent } from './userlist/userlist.component';


const routes: Routes =  [
  {path:'ninjas', component: NinjaComponent},
  {path:'users', component: UserlistComponent},
  {path:'ninja-detail/:name', component: NinjandetailsComponent},
  {path:'register', component: RegisterComponent},
  {path:'', redirectTo: '/ninjas', pathMatch: 'full'},
  {path:'**', component:PagenotfoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NinjaComponent,
    SingleComponent,
    NinjandetailsComponent,
    SelectedComponent,
    PagenotfoundComponent,
    RegisterComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes,{ enableTracing: true })
  ],
  providers: [
      NinjasService,
      SingleService,
      DataService, RegisterService,
      UserlistService
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }

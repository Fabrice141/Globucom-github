import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CatalogueComponent } from './page/catalogue/catalogue.component';
import { HomeComponent } from './page/home/home.component';
import { ConceptionComponent } from './page/service/etude/conception/conception.component';
import { FollowedComponent } from './page/service/obtaining-build-permit/followed/followed.component';
import { WhoAreWeComponent } from './page/who-are-we/who-are-we.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'who-are-you', component: WhoAreWeComponent },
  // { path: 'service/study/conception', component: ConceptionComponent },
  // { path: 'contact-us', component: ContactUsComponent },
  //   { path: 'catalogue', component: CatalogueComponent},
  // { path: 'service/obtaining-build-permit/followed' , component: FollowedComponent },
  { path:'', redirectTo: '/home', pathMatch: 'full'},

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

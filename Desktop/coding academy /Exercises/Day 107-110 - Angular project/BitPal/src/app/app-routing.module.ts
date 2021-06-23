import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from 'src/pages/contact-details/contact-details.component';
import { ContactEditComponent } from 'src/pages/contact-edit/contact-edit.component';
import { ContactsComponent } from 'src/pages/contacts/contacts.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { LoginSignupComponent } from 'src/pages/login-signup/login-signup.component';
import { MarketDashboardComponent } from 'src/pages/market-dashboard/market-dashboard.component';
import { AuthGuard } from 'src/services/auth.guard';
import { ContactResolver } from 'src/services/contact.resolver';

const routes: Routes = [
  { path: 'contacts/:id/edit', component: ContactEditComponent,canActivate: [AuthGuard] ,resolve:{contact:ContactResolver} },
  { path: 'contacts/add', component: ContactEditComponent ,canActivate: [AuthGuard]},
  { path: 'contacts/:id', component: ContactDetailsComponent ,canActivate: [AuthGuard], resolve:{contact:ContactResolver}},
  { path: 'contacts', component: ContactsComponent,canActivate: [AuthGuard] },
  {path: 'login', component:LoginSignupComponent},
  {path: 'signup', component:LoginSignupComponent},
  { path: 'stats', component: MarketDashboardComponent},
  { path: '', component: HomeComponent,canActivate: [AuthGuard] },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, paramsInheritanceStrategy: 'always' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { CreateRequestsComponent } from './components/create-requests/create-requests.component';
import { EmployeeHomeComponent } from './components/employee-home/employee-home.component';
import { ManagerHomeComponent } from './components/manager-home/manager-home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EPendingRequestsComponent } from './components/e-pending-requests/e-pending-requests.component';
import { EProcessedRequestsComponent } from './components/e-processed-requests/e-processed-requests.component';
import { MPendingRequestsComponent } from './components/m-pending-requests/m-pending-requests.component';
import { MProcessedRequestsComponent } from './components/m-processed-requests/m-processed-requests.component';
import { SpecifyEmployeeComponent } from './components/specify-employee/specify-employee.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ForbiddenContentComponent } from './components/forbidden-content/forbidden-content.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "all-employees",
    component: EmployeeListComponent,
    canActivate:[AuthGuardService]  
  },
  {
    path: "create-new-request",
    component: CreateRequestsComponent,
    canActivate:[AuthGuardService]  
  },
  {
    path: "eHome",
    component: EmployeeHomeComponent,
    canActivate:[AuthGuardService]  
  },
  {
    path: "mHome",
    component: ManagerHomeComponent,
    canActivate:[AuthGuardService]  
  },
  {
    path: "login",
    component: LoginComponent 
  },
  {
    path: 'logout', 
    component: LogoutComponent,
    canActivate:[AuthGuardService]   
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate:[AuthGuardService]  
  },
  {
    path: "employee-pending",
    component: EPendingRequestsComponent,
    canActivate:[AuthGuardService]  
  },
  {
    path: "employee-processed",
    component: EProcessedRequestsComponent,
    canActivate:[AuthGuardService]  
  },
  {
    path: "manager-pending",
    component: MPendingRequestsComponent,
    canActivate:[AuthGuardService]  
  },
  {
    path: "manager-processed",
    component: MProcessedRequestsComponent,
    canActivate:[AuthGuardService]  
  },
  {
    path: "specify-employee",
    component: SpecifyEmployeeComponent,
    canActivate:[AuthGuardService]  
  },
  {
    path: "403", 
    component: ForbiddenContentComponent,
    canActivate:[AuthGuardService]  
  },
  {
    path: "404", 
    component: NotFoundComponent
  },
  {
    path: '**', 
    redirectTo: "404"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

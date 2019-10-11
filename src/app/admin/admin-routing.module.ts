import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from '../auth/auth.guard';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
      path: '',
      children: [
        { path: '', component: AdminDashboardComponent }
      ],
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

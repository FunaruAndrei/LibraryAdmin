import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DetailComponent } from './detail/detail.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';


const routes: Routes = [
    { path: '', redirectTo: 'index' },
    {
        path: 'index', component: IndexComponent
    },
    {
        path: 'book/:id', component: DetailComponent
    },
    {
        path: 'userdashboard', component: UserDashboardComponent
    }
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }

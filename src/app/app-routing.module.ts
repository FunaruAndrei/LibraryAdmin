import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  // { path: '', redirectTo: 'library', pathMatch: 'full' },
    { path: 'library', loadChildren: './library/library.module#LibraryModule' },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

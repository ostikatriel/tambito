import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudComponent } from './pages/admin/crud/crud.component';
import { TambitoComponent } from './pages/store/tambito/tambito.component';

const routes: Routes =
  [
    { path: '', component: TambitoComponent },
    { path: 'crud', component: CrudComponent },
    { path: '**',  redirectTo: '/', pathMatch: 'full'},
    //{ path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
    //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

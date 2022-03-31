import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardmainComponent } from './components/dashboardmain/dashboardmain.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';


const routes: Routes = [
  {
    path:'app',
    component:FullLayoutComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardmainComponent,
      },
    ],
  },
  {
    path:'',
    component:FullLayoutComponent,
    loadChildren: () =>import('./pages/pages.module').then(x => x.PagesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

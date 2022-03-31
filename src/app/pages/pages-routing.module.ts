import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';


const routes: Routes = [
  { path:'', component: DashboardComponent,},
{ path:'dashboard', component: DashboardComponent,},
{ path:'kanban', component: KanbanBoardComponent,}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

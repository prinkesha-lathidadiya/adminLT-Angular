import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExtraComponent } from './extra/extra.component';
import { GeneralComponent } from './general/general.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { WidgetsComponent } from './widgets/widgets.component';


const routes: Routes = [
  { path:'', component: DashboardComponent,},
{ path:'dashboard', component: DashboardComponent,},
{ path:'kanban', component: KanbanBoardComponent,},
{ path:'mailbox', component: MailboxComponent,},
{ path:'widgets', component: WidgetsComponent,},
{ path:'general', component: GeneralComponent,},
{ path:'extra', component: ExtraComponent,}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

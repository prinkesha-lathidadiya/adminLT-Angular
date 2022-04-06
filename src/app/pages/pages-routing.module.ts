import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExtraComponent } from './extra/extra.component';
import { GeneralFormComponent } from './general-form/general-form.component';
import { GeneralComponent } from './general/general.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { LayoutOptionComponent } from './layout-option/layout-option.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { PageComponent } from './page/page.component';
import { WidgetsComponent } from './widgets/widgets.component';


const routes: Routes = [
  { path:'', component: DashboardComponent,},
{ path:'dashboard', component: DashboardComponent,},
{ path:'kanban', component: KanbanBoardComponent,},
{ path:'mailbox', component: MailboxComponent,},
{ path:'widgets', component: WidgetsComponent,},
{ path:'general', component: GeneralComponent,},
{ path:'extra', component: ExtraComponent,},
{ path:'layout-option', component: LayoutOptionComponent,},
{ path:'form', component: GeneralFormComponent,},
{ path:'page', component: PageComponent,},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

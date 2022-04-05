import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MailboxComponent } from './mailbox/mailbox.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { GeneralComponent } from './general/general.component';
import { ExtraComponent } from './extra/extra.component';


@NgModule({
  declarations: [
    DashboardComponent,
    KanbanBoardComponent,
    MailboxComponent,
    WidgetsComponent,
    GeneralComponent,
    ExtraComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class PagesModule { }

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
import { LayoutOptionComponent } from './layout-option/layout-option.component';
import { GeneralFormComponent } from './general-form/general-form.component';
import { PageComponent } from './page/page.component';
import { TableComponent } from './table/table.component';
import { CalenderComponent } from './calender/calender.component';
import { ExtrasComponent } from './extras/extras.component';
import { LanguageComponent } from './language/language.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DropDownComponent } from './drop-down/drop-down.component';
import { DropDown1Component } from './drop-down1/drop-down1.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    DashboardComponent,
    KanbanBoardComponent,
    MailboxComponent,
    WidgetsComponent,
    GeneralComponent,
    ExtraComponent,
    LayoutOptionComponent,
    GeneralFormComponent,
    PageComponent,
    TableComponent,
    CalenderComponent,
    ExtrasComponent,
    LanguageComponent,
    DropDownComponent,
    DropDown1Component,

  
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DragDropModule,
    DragDropModule,
    MatButtonModule,
    MatCheckboxModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    
    })
  ]
})
export class PagesModule { }

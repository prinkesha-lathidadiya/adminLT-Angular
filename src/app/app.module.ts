import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { KanbanBoardComponent } from './pages/kanban-board/kanban-board.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { EmptyLayoutComponent } from './layout/empty-layout/empty-layout.component';
import { DashboardmainComponent } from './components/dashboardmain/dashboardmain.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
  
    FullLayoutComponent,
    EmptyLayoutComponent,
    DashboardmainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { TaskComponent } from './task/task.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { BalanceTasksComponent } from './balance-tasks/balance-tasks.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { DateSelectComponent } from './date-select/date-select.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    TaskComponent,
    PageNotfoundComponent,
    BalanceTasksComponent,
    ListTasksComponent,
    DateSelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { appReducers } from "./app.reducers";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { TodoComponent } from "./todo/todo.component";
import { ListComponent } from "./todo/list/list.component";
import { ItemComponent } from "./todo/item/item.component";
import { TodoFooterComponent } from "./todo/todo-footer/todo-footer.component";
import { TodoAddComponent } from "./todo/todo-add/todo-add.component";
import { FilterPipe } from './filter/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TodoComponent,
    ListComponent,
    ItemComponent,
    TodoFooterComponent,
    TodoAddComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

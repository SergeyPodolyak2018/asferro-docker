import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TableBuildComponent } from './table-build/table-build.component';

import { DataService} from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    TableBuildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LayoutModule } from './layout/layout.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { UnderConstructionComponent } from './core/components/under-construction/under-construction.component';

@NgModule({
  imports: [BrowserModule, FormsModule, LayoutModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent, UnderConstructionComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

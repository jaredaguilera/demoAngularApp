import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PersonComponent } from './components/person/person.component';
import { LoadingComponent } from './components/loading/loading.component';

// Services
import { PersonService } from './services/person.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

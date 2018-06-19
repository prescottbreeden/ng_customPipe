import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { PipesComponent } from './pipes/pipes.component';
import { SummaryPipe } from './summary.pipe';
import { TitleCasePipe } from './title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    PipesComponent,
    SummaryPipe,
    TitleCasePipe
  ],
  imports: [
      BrowserModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

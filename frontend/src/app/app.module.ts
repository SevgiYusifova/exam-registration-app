import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './modules/students/students.component';
import { SubjectsComponent } from './modules/subjects/subjects.component';
import { ExamsComponent } from './modules/exams/exams.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentFormComponent } from './modules/students/student-form/student-form.component';
import { MaterialModule } from './shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SubjectFormComponent } from './modules/subjects/subject-form/subject-form.component';
import { ExamFormComponent } from './modules/exams/exam-form/exam-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    SubjectsComponent,
    ExamsComponent,
    StudentFormComponent,
    SubjectFormComponent,
    ExamFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

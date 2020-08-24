import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferencesComponent } from './conferences.component';
import { RegisterConferenceComponent } from './register-conference/register-conference.component';
import { ListConferenceComponent } from './list-conference/list-conference.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatGridListModule,
  MatStepperModule,
  MatTableModule,
  MatPaginatorModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule
} from '@angular/material';



@NgModule({
  declarations: [ConferencesComponent, RegisterConferenceComponent, ListConferenceComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatStepperModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatStepperModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
  ],
})
export class ConferencesModule {}

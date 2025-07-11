import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Exam } from 'src/app/models/exam.model';
import { StudentFormComponent } from '../../students/student-form/student-form.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-exam-form',
  templateUrl: './exam-form.component.html',
  styleUrls: ['./exam-form.component.scss']
})
export class ExamFormComponent {
  @Output() formSubmit = new EventEmitter<Exam>();
  examForm: FormGroup;

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<StudentFormComponent>
  ) {
    this.examForm = this.fb.group({
      subjectCode: ['', [Validators.required, Validators.pattern(/^[A-Z0-9]*$/)]],
      studentNumber: [null, Validators.required],
      examDate: ['', Validators.required],
      grade: ['', [Validators.required, Validators.min(0), Validators.max(11)]]
    });
  }

  submit(): void {
    if (this.examForm.valid) {
      this.dialogRef.close(this.examForm.value);
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss']
})
export class SubjectFormComponent implements OnInit {

  subjectForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<SubjectFormComponent>
  ) { }

  ngOnInit(): void {
    this.subjectForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      teacherName: ['', Validators.required],
      teacherSurname: ['', Validators.required],
      grade: ['', Validators.required]
    });
  }

  submit(): void {
    if (this.subjectForm.valid) {
      this.dialogRef.close(this.subjectForm.value);
    }
  }

}

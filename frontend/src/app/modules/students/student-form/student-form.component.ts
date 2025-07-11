import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  studentForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<StudentFormComponent>
  ) { }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      number: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      grade: ['', [Validators.required, Validators.min(0), Validators.max(11)]]
    });
  }

  submit(): void {
    if (this.studentForm.valid) {
      this.dialogRef.close(this.studentForm.value);
    }
  }
}
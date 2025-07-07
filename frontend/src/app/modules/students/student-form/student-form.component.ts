import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  @Output() formSubmit = new EventEmitter<any>();

  studentForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      number: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      grade: ['', Validators.required]
    });
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  submit(): void {
    if (this.studentForm.valid) {
      this.formSubmit.emit(this.studentForm.value);
    }
  }
}
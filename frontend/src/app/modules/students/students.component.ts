import { Component, OnInit } from '@angular/core';
import { StudentFormComponent } from './student-form/student-form.component';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students: Student[] = []

  constructor(private dialog: MatDialog,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.getStudents();
  }


  openAddStudentDialog(): void {
    const dialogRef = this.dialog.open(StudentFormComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.studentService.addStudent(result).subscribe(addedStudent => {
          this.students.push(addedStudent);
        });
      }
    });
  }

  getStudents() {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  }
}

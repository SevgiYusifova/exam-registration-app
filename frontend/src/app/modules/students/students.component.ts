import { Component, OnInit } from '@angular/core';
import { StudentFormComponent } from './student-form/student-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }


  openAddStudentDialog(): void {
    const dialogRef = this.dialog.open(StudentFormComponent, {
      width: '800px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        //
      }
    });
  }
}

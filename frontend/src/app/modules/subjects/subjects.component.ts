import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubjectService } from 'src/app/services/subject.service';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { Subject } from 'src/app/models/subject.model';
import { TableColumn } from 'src/app/models/table-settings';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  subjectColumns: TableColumn[] = [
    { key: 'code', label: 'Subject Code' },
    { key: 'name', label: 'Subject Name' },
    { key: 'class', label: 'Class' },
    { key: 'teacherName', label: 'Teacher Name' },
    { key: 'teacherSurname', label: 'Teacher Surname' }
  ];

  subjects: Subject[] = []
  dataSource: any[] = [];

  constructor(private dialog: MatDialog,
    private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.getSubjects();
  }

  openAddSubjectDialog(): void {
    const dialogRef = this.dialog.open(SubjectFormComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.subjectService.addSubject(result).subscribe(addedSubject => {
          this.subjects.push(addedSubject);
        });
      }
    });
  }

  getSubjects() {
    this.subjectService.getSubjects().subscribe(data => {
      this.subjects = data;
    });
  }

}

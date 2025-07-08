import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubjectService } from 'src/app/services/subject.service';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { Subject } from 'src/app/models/subject.model';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  subjects: Subject[] = []

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

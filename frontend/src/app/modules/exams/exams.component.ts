import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Exam } from 'src/app/models/exam.model';
import { SubjectService } from 'src/app/services/subject.service';
import { ExamFormComponent } from './exam-form/exam-form.component';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent implements OnInit {

  exams: Exam[] = []

  constructor(private dialog: MatDialog,
    private examService: ExamService) { }

  ngOnInit(): void {
    this.getExams();
  }

  openAddExamDialog(): void {
    const dialogRef = this.dialog.open(ExamFormComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.examService.addExam(result).subscribe(addedExam => {
          this.exams.push(addedExam);
        });
      }
    });
  }

  getExams() {
    this.examService.getExams().subscribe(data => {
      this.exams = data;
    });
  }

}
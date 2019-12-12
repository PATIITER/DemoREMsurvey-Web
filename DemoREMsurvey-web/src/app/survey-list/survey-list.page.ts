import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.page.html',
  styleUrls: ['./survey-list.page.scss'],
})
export class SurveyListPage implements OnInit {

  constructor(public router :Router) { }

  ngOnInit() {
  }

  gotoSurveyDetail(){
this.router.navigate(['/survey-detail'])

  }
}

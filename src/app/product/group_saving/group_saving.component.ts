import { Component, OnInit } from '@angular/core';

declare let $;

@Component({
  selector: 'app-group-saving',
  templateUrl: './group_saving.component.html',
  styleUrls: ['./group_saving.component.scss']
})
export class GroupSavingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.getScript('assets//HTWF/scripts/script.js');
  }
}

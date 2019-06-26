import { Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.getScript('assets//HTWF/scripts/script.js');
    $.getScript('assets//HTWF/scripts/google.maps.min.js');
  }

}

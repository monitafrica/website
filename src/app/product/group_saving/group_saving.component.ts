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
    this.displaySlider();
  }


  displaySlider() {
    $(".coverflow-slider").executeFunction("flipster", function () {
      $(".coverflow-slider").each(function () {
        if ($(this).attr("data-trigger") != "manual") {
          var w = $(this).attr("data-width");
          var wm = $(this).attr("data-mobile-width");
          if ($(window).width() < 768 && !isEmpty(wm)) w = wm;
          var options = {};
          var opt = $(this).attr("data-options");
          if (!isEmpty(opt)) {
            options = getOptionsString(opt, options);
          }
          if (!isEmpty(w)) $(this).find("ul > li").css("width", w + "%");
          $(this).flipster(options);
        }
      });
    });
  }
}

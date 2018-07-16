import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenavmenu',
  templateUrl: './sidenavmenu.component.html',
  styleUrls: ['./sidenavmenu.component.css']
})
export class SidenavmenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public onCSS(no, event) {
    console.log(no);
  }

  public onForm(no, event) {
    console.log(no);
  }

  public onLayout(no, event) {
    console.log(no);
  }

  public onIndicators(no, event) {
    console.log(no);
  }

  public onService(no, event) {
    console.log(no);
  }
}

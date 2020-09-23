import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-child',
  templateUrl: './grimm.component.html'
})
export class GrimmComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() siblings: [];  

  ngOnInit(): void {
  }

  pageLink = 'child';

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }  
}

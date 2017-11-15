import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clickedLink(e) {
    const element = e.srcElement;
    console.log(element.parentElement);
    for (let i = 0; i < element.parentElement.parentElement.children.length ; i++) {
      if (element.parentElement.parentElement.children[i].classList.contains('active')) {
        element.parentElement.parentElement.children[i].classList.remove('active');
      }
    }
    element.parentElement.classList.add('active');
  }
}

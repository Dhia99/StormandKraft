import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index6',
  templateUrl: './index6.component.html',
  styleUrls: ['./index6.component.css']
})

/**
 * Index-6 component
 */
export class Index6Component implements OnInit {

  currentSection = 'home';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    let i = 1;
    setInterval(() => {
      if (i === 1) { (<HTMLImageElement>document.querySelector("#isSlideImage")).src = 'assets/images/slide-1.jpg'; }
      else if (i === 2) { (<HTMLImageElement>document.querySelector("#isSlideImage")).src = 'assets/images/slide-2.jpg'; }
      else { (<HTMLImageElement>document.querySelector("#isSlideImage")).src = 'assets/images/slide-3.jpg'; }
      if (i >= 3) { i = 0; }
      i++;
    }, 2500);
    const navbar = document.getElementById('navbar');
    navbar.classList.add('nav-sticky');
  }

 


  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  /**
   * Toggle navbar
   */
  toggleMenu() {
    document.getElementById('navbarCollapse').classList.toggle('show');
  }

  

}

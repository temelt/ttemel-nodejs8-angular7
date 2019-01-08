import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BookModel} from './../../shared/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pushRightClass: string = 'push-right';
  collapseClass:string = 'collapsed';
  currentUser: BookModel;
  isCollapsed = false;

  constructor( private translate: TranslateService, public router: Router) {

    this.translate.addLangs(['en', 'tr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|tr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

    this.router.events.subscribe(val => {
      if (
        val instanceof NavigationEnd &&
        window.innerWidth <= 992 &&
        this.isToggled()
      ) {
        this.toggleSidebar();
      }
    });
  }

  ngOnInit() {

  }

  isToggled(): boolean {
    const dom: Element = document.querySelector('aside');
    return (dom)?dom.classList.contains(this.collapseClass):false;
  }

  toggleSidebar() {
    const dom: any = document.querySelector('aside');
    (dom)?dom.classList.toggle(this.collapseClass):'';
    const cdom: any = document.querySelector('#main-container');
    (cdom)?cdom.classList.toggle(this.collapseClass):'';
  }

  rltAndLtr() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle('rtl');
  }

  changeLang(language: string) {
    this.translate.use(language);
  }
}

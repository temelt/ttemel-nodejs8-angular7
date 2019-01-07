import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserModel} from './../../shared/models';
import { AuthenticationService } from '../../core/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pushRightClass: string = 'push-right';
  collapseClass:string = 'collapsed';
  currentUser: UserModel;
  isCollapsed = false;

  constructor( private translate: TranslateService, public router: Router,private authService:AuthenticationService) {

    this.currentUser = authService.getloggedInUser()
    this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

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

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
  }

  changeLang(language: string) {
    this.translate.use(language);
  }
}

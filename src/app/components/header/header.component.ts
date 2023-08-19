import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguagesService } from 'src/app/shared/services/languages.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMenu: boolean = false;
  selectedLang: string = 'EN';

  constructor(private router: Router, private serviceLang: LanguagesService) {}
  ngOnInit() {
    window.addEventListener('mouseup', this.closeModalListener);

    this.selectedLang = this.serviceLang.getLanguage();
  }
  ngOnDestroy() {
    window.removeEventListener('mouseup', this.closeModalListener);
  }

  closeModalListener = (event: MouseEvent) => {
    let menuLang = document.querySelector('.list');
    // Votre code de gestion d'événements ici
    if (event.target instanceof Node)
      if (
        event.target &&
        event.target != menuLang &&
        event.target.parentNode != menuLang
      ) {
        this.showMenu = false;
      }
  };

  handleToggleMenu() {
    this.showMenu = !this.showMenu;
  }

  handleSelectLang(lang: string) {
    this.selectedLang = lang;
    this.serviceLang.setLanguage(lang);
    this.showMenu = false;
  }

  handleGotoHome() {
    this.router.navigate(['painting']);
  }
}

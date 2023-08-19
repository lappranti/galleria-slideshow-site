import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';
import { LanguagesService } from 'src/app/shared/services/languages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  gallerie!: any;

  currentLanguage!: string;
  private subscription!: Subscription;

  constructor(
    private dataSerive: DataService,
    private languageService: LanguagesService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.currentLanguage = this.languageService.getLanguage();

    this.dataSerive.getGallerie().subscribe(resp => {
      this.gallerie = resp;
    });

    this.subscription = this.languageService
      .getLanguageObservable()
      .subscribe(newLanguage => {
        this.currentLanguage = newLanguage;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); // N'oubliez pas de désinscrire la souscription lors de la destruction du composant
  }

  handleGotoDetail(paintingId: any) {
    this.router.navigate(['painting/', paintingId]);
  }
}

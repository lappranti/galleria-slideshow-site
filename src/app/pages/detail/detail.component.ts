import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';
import { LanguagesService } from 'src/app/shared/services/languages.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {
  paintingId!: string;
  currentPainting!: any;
  paintingList!: any;
  currentLangue!: string;

  subscription!: Subscription;

  showModal: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private langueService: LanguagesService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.paintingId = params.get('id') || '';
      this.setLoader();
      this.getCurrentPainting();
    });

    this.currentLangue = this.langueService.getLanguage();
    this.subscription = this.langueService
      .getLanguageObservable()
      .subscribe(resp => {
        this.currentLangue = resp;
      });

    window.addEventListener('resize', () => {
      this.setLoader();
    });
    this.setLoader();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    window.removeEventListener('resize', this.setLoader);
  }

  getCurrentPainting() {
    this.dataService.getGallerie().subscribe(data => {
      this.paintingList = data;
      this.currentPainting = this.paintingList[+this.paintingId - 1];
      // console.log(this.paintingList);
    });
    // console.log(this.paintingId);
  }

  setLoader() {
    const deviceWidth = window.innerWidth;
    const loarderWidth = (deviceWidth / 15) * parseInt(this.paintingId);
    // console.log(this.paintingId);

    const loaderElement = document.querySelector('.loader') as HTMLElement;
    if (loaderElement) loaderElement.style.width = `${loarderWidth}px`;
  }

  getNextPainting() {
    if (+this.paintingId < 15) {
      const nextPaintingId = parseInt(this.paintingId) + 1;
      this.router.navigate(['painting', nextPaintingId]);
    } else {
      const nextPaintingId = 1;
      this.router.navigate(['painting', nextPaintingId]);
    }
    //this.setLoader();
  }
  getPreviousPainting() {
    if (+this.paintingId > 1) {
      const prevtPaintingId = parseInt(this.paintingId) - 1;
      this.router.navigate(['painting', prevtPaintingId]);
    } else {
      const prevtPaintingId = 15;
      this.router.navigate(['painting', prevtPaintingId]);
    }
    //this.setLoader();
  }

  handleToggleModalPainting() {
    this.showModal = !this.showModal;
  }

  getWikipediaLink(baseLink: string) {
    if (this.currentLangue === 'FR') {
      // Lien vers la version française
      return baseLink.replace('/en.', '/fr.');
    } else {
      // Lien vers la version anglaise (par défaut)
      return baseLink;
    }
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  private readonly LANGUAGE_KEY = 'selectedLanguage';
  private languageSubject = new BehaviorSubject<string>(
    localStorage.getItem(this.LANGUAGE_KEY) || 'FR'
  );

  setLanguage(language: string) {
    localStorage.setItem(this.LANGUAGE_KEY, language);
    this.languageSubject.next(language); // Émet un nouvel événement
  }

  getLanguage(): string {
    return localStorage.getItem(this.LANGUAGE_KEY) || 'FR'; // Par défaut, en francais
  }

  getLanguageObservable() {
    return this.languageSubject.asObservable();
  }
}

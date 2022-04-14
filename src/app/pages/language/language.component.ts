import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

name:string='dsfrg'











  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  
  useLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit(): void {
  }
 

}

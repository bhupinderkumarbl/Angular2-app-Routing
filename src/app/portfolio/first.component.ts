import { Component } from '@angular/core';
import {appService} from '../app.service';

@Component({
  selector: 'second-app',
  templateUrl: './indexs.html',

})
export class portfolioComponent  {

  value = '';
  constructor(private _appService: appService) { }
  ngOnInit(): void {
    this.value = this._appService.getApp();
  }
}

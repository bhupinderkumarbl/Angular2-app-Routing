import { Component } from '@angular/core';
import {appService} from '../app.service';

@Component({
  selector: 'second-app',
  templateUrl: './indexs.html',
})
export class aboutComponent  {
  constructor(private _appService: appService) { }
  ngOnInit(): void {
    this.value = this._appService.getApp();
  }
  Status: boolean = true;
  clicked(event) {
    // document.getElementById("footer").style.visibility = "visible";
    document.getElementById("footer").classList.add('MyClass');

  };
  closemenu(event) {
    // document.getElementById("footer").style.visibility = "visible";
    document.getElementById("footer").classList.remove('MyClass');

  }
}

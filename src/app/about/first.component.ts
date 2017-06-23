import {Component, ViewChild, ElementRef} from '@angular/core';
import {appService} from '../app.service';

@Component({
  selector: 'home-app',
  templateUrl: './indexs.html',
})
export class aboutComponent {

  @ViewChild('foo') el: ElementRef;
  value = '';

  constructor(private _appService: appService) {
  }

  ngOnInit(): void {
    this.value = this._appService.getApp();
    this.el.nativeElement.classList.add('puppi');

  }

  Status: boolean = true;

  clicked(event: any) {
    // document.getElementById("footer").style.visibility = "visible";
    document.getElementById("footer").classList.add('MyClass');


  };

  closemenu(event: any) {
    // document.getElementById("footer").style.visibility = "visible";
    document.getElementById("footer").classList.remove('MyClass');

  }
}

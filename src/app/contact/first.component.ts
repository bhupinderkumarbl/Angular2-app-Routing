import { Component } from '@angular/core';
import {aboutComponent} from '../about';

@Component({
  selector: 'second-app',
  templateUrl: './indexs.html',
})
export class contactComponent {

  onclick(value){
    // console.log(value);
    document.getElementById('taag').innerHTML = {value};
  }


}

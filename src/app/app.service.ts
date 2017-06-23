/**
 * Created by bk on 6/22/2017.
 */
import {  Injectable} from '@angular/core';

@Injectable()
export class appService {
  getApp(): string {
    return "DI";
  }

}

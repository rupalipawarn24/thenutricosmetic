import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }
  private openPopup = new Subject();
public openPopupObservable = this.openPopup.asObservable();

showPopup(){
  this.openPopup.next(true);
  console.log("hiii");
}

hidePopup(){
  this.openPopup.next(false);
}
}

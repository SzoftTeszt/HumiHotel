import { Injectable } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modals:ModalComponent[]=[];

  constructor() { }

  add(modal:ModalComponent){
    this.modals.push(modal)
  }

  remove(modal:ModalComponent){
    this.modals= this.modals.filter(x=> x!==modal)
  }

  open(id:string){
    const modal= this.modals.find(x=> x.id==id)
    if (modal) modal.open();
  }
  close(){
    const modal= this.modals.find(x=> x.isOpen)
    if (modal) modal.close();
  }
 }

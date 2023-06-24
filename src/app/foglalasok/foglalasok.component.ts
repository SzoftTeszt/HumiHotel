import { Component, ViewEncapsulation } from '@angular/core';
import { BaseService } from '../base.service';
import { ModalComponent } from '../modal/modal.component';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-foglalasok',
  templateUrl: './foglalasok.component.html',
  styleUrls: ['./foglalasok.component.css'],
  
})
export class FoglalasokComponent {
oszlopok=[
  {key:"id", text:"Azon"},
  {key:"vendeg_neve", text:"Vendég neve"},
  {key:"szoba_szama", text:"Szoba száma"},
  {key:"erkezes", text:"Érkezés"},
  {key:"tavozas", text:"Távozás"},
]
foglalasok:any;

foglalas:any={};

constructor(private base:BaseService, public modalService:ModalService){
  this.refresh();
}

refresh(){
  this.base.get().subscribe(
    (a)=>{this.foglalasok=a; console.log("Refresh", this.foglalasok)}
  )
}


delete(body:any){
    this.base.delete(body).subscribe(
      ()=>this.refresh()
    )
}
ujFoglalas(){
  this.foglalas={};
  this.modalService.open('modal-1');
  
}

modositas(foglalas:any){
  this.foglalas=Object.assign({},foglalas);
  this.modalService.open('modal-1');
}

closeModal(){
  this.modalService.close();
}
saveModal(){
  if (this.foglalas.id)
    this.base.update(this.foglalas).subscribe( 
      ()=>{ 
            this.closeModal()
            this.refresh()
      }
      )
  else
    this.base.create(this.foglalas).subscribe(  ()=>{ 
      this.closeModal()
      this.refresh()
})
  
    console.log(this.foglalas)
}
}

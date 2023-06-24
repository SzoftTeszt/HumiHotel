import { Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../modal.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ModalComponent {
  @Input() id?:string;
  
  isOpen=false;
  elements:any;

	constructor(private modalService:ModalService, private elementRef:ElementRef ) {
    this.modalService.add(this)
    this.elements=elementRef.nativeElement;
    document.body.appendChild(this.elements)
    this.elements.addEventListener('click', (elem:any)=>
    {
      // console.log(elem.target.className)
      if (elem.target.className=="modal")
        this.close()
    }
    )

  }

  open(){
    this.isOpen=true;
    this.elements.style.display="block"
  }
  close(){
    this.isOpen=false;
    this.elements.style.display="none"
  }

  ngOnDestroy(){
    this.modalService.remove(this)
  }

}

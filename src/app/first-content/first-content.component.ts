import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-first-content',
  templateUrl: './first-content.component.html',
  styleUrls: ['./first-content.component.css']
})
export class FirstContentComponent {
  constructor(public translate: TranslateService){}
displayTime:boolean=false;
displayAppointment:boolean=false;

base64:any

displayTimeFun(){
this.displayTime=true
}

servesTime(){
  this.displayTime=false

}

displayAppointmentFun(){
  this.displayAppointment=true
}

bookOneOnly(){
  this.displayAppointment=false

}


getImagePath(event:any){
  const file =event.target.files[0];
  const reader =new FileReader();
  reader.readAsDataURL(file)
  reader.onload=()=>{
  this.base64=reader.result
  }
  }
}

import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-second-content',
  templateUrl: './second-content.component.html',
  styleUrls: ['./second-content.component.css']
})
export class SecondContentComponent {
constructor(public translate: TranslateService){}
  @ViewChild('toggleLocalReferance') toggle:any;
  @ViewChild('toggleSunday') toggleSunday:any;
  @ViewChild('toggleMonday') toggleMonday:any;
  @ViewChild('toggleTuesday') toggleTuesday:any;
  @ViewChild('toggleWednesday') toggleWednesday:any;
  @ViewChild('toggleThurday') toggleThurday:any;
  @ViewChild('toggleFriday') toggleFriday:any;


  displaySaturdayVariable:boolean=false;
  displaySundayVariable:boolean=false;
  displayMondayVariable:boolean=false;
  displaytuesdayVariable:boolean=false;
  displayWednesdayVariable:boolean=false;
  displayThursdayVariable:boolean=false;
  displayFridayVariable:boolean=false;

  test:any[]=[];

  sundayArray:any[]=[];
  
  mondayArray:any[]=[];

  tuesdayArray:any[]=[];

  wednesdayArray:any[]=[];

  thurdayArray:any[]=[];

  fridayArray:any[]=[];
 
  nextRowSaterday=1;
  nextRowSunday=1;
  nextRowMonday=1;
  nextRowTuesday=1;
  nextRowWednesday=1;
  nextRowTherday=1;
  nextRowFriday=1;

  

  

  displaySaturday(){
    if(this.toggle.nativeElement.checked){
      this.displaySaturdayVariable=true

    }else{
      this.displaySaturdayVariable=false

    }
  }

  diaplaySunday(){
    if(this.toggleSunday.nativeElement.checked){
      this.displaySundayVariable=true

    }else{
      this.displaySundayVariable=false

    }
  }

  
  displayMonday(){
    if(this.toggleMonday.nativeElement.checked){
      this.displayMondayVariable=true

    }else{
      this.displayMondayVariable=false

    }
  }

  displayTuesday(){
    if(this.toggleTuesday.nativeElement.checked){
      this.displaytuesdayVariable=true

    }else{
      this.displaytuesdayVariable=false

    }
  }

  displayWednesday(){
    if(this.toggleWednesday.nativeElement.checked){
      this.displayWednesdayVariable=true

    }else{
      this.displayWednesdayVariable=false

    }
  }

  displayThurday(){
    if(this.toggleThurday.nativeElement.checked){
      this.displayThursdayVariable=true

    }else{
      this.displayThursdayVariable=false

    }
  }

  displayFriday(){
    if(this.toggleFriday.nativeElement.checked){
      this.displayFridayVariable=true

    }else{
      this.displayFridayVariable=false

    }
  }

  // /////////////////////////////////////////
  addtime(){
    this.test.push({id:this.nextRowSaterday++})
  }

  remove(itemRemove:number):void{
    this.test = this.test.filter(item => item.id !== itemRemove);
  }

  // /////////////////////////////sunday

  addSundayTime(){
    this.sundayArray.push({id:this.nextRowSunday++})
  }

  removeSundayTime(itemRemove:number):void{
    this.sundayArray = this.sundayArray.filter(item => item.id !== itemRemove);
  }

  // ////////////////////////////////////////monday
  addMondayTime(){
    this.mondayArray.push({id:this.nextRowMonday++})
  }

  removeMondayTime(itemRemove:number):void{
    this.mondayArray = this.mondayArray.filter(item => item.id !== itemRemove);
  }

  // ///////////////////////////////////////////////tuesday

  addTuesdayTime(){
    this.tuesdayArray.push({id:this.nextRowTuesday++})

  }
  removetuesdayTime(itemRemove:number):void{
    this.tuesdayArray = this.tuesdayArray.filter(item => item.id !== itemRemove);
  }
// ///////////////////////////////////////////////////////////wednesday

addWednesdayTime(){
  this.wednesdayArray.push({id:this.nextRowWednesday++})

}

removeWednesdayTime(itemRemove:number):void{
  this.wednesdayArray = this.wednesdayArray.filter(item => item.id !== itemRemove);
}
// //////////////////////////////////////////////////////////////thurday
 addThurdayTime(){
  this.thurdayArray.push({id:this.nextRowTherday++})

 }
 removeThurdayTime(itemRemove:number):void{
  this.thurdayArray = this.thurdayArray.filter(item => item.id !== itemRemove);
}

// /////////////////////////////////////////////////////////////friday

addFridayTime(){
  this.fridayArray.push({id:this.nextRowFriday++})

}

removeFridayTime(itemRemove:number):void{
  this.fridayArray = this.fridayArray.filter(item => item.id !== itemRemove);
}



}


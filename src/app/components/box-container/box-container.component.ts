import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-container',
  templateUrl: './box-container.component.html',
  styleUrls: ['./box-container.component.css']
})

export class BoxContainerComponent implements OnInit {
    private readonly BACK_NO_FRIENDLY: string[]  = ['#026969', '#97040D', '#B300A6'];
    private readonly TEXT_NO_FRIENDLY:string[]= ['#A81E6A', '#0A5901', '#A73B07'];
    private readonly BACK_FRIENDLY: string[]  = ['#E7E6E6', '#D6DCE5', '#FBE5D6'];
    private readonly TEXT_FRIENDLY:string[]= ['#181717', '#222A35', '#843C0C'];

  isFriendly: boolean;
  boxList: number[];
  backColorList: string[];
  textColor:string[];

  constructor() {
    this.isFriendly = false;
    this.boxList = [1,2,3];
    this.backColorList = this.BACK_NO_FRIENDLY;
    this.textColor = this.TEXT_NO_FRIENDLY;

  }

  ngOnInit(): void {
  }
  changeMode():void{
    this.isFriendly = !this.isFriendly;
    if(this.isFriendly){
      this.backColorList = this.BACK_FRIENDLY;
      this.textColor = this.TEXT_FRIENDLY;
    } else if(!this.isFriendly ){
      this.backColorList = this.BACK_NO_FRIENDLY;
      this.textColor = this.TEXT_NO_FRIENDLY;
    }
  }

  exchangeColors(event: MouseEvent, i: number ):void{
    let temp = this.backColorList[i];
    this.backColorList[i] = this.textColor[i];
    this.textColor[i] = temp;
  }

}

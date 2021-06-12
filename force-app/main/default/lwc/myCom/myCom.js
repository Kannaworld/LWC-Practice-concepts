import { LightningElement, } from 'lwc';

export default class MyCom extends LightningElement {
     firstNum='';
     secondNum='';
     result=0;

    firstChange(event){
    this.firstNum = parseInt(event.target.value); 
    }
    secondChange(event){

    this.secondNum = parseInt(event.target.value);
    }

    additonHandler(){
        this.result = (this.firstNum) + (this.secondNum);
    }
}
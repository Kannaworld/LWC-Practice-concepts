import { LightningElement,track } from 'lwc';

export default class SimpleInterestCalculator extends LightningElement {
    @track currentOutput;
     principle;
     rateOfInterest;
     noOfYears;

    principleChageHandler(event){
    this.principle=parseInt(event.target.value);
    }
    timeChageHandler(event){
    this.noOfYears=parseInt(event.target.value);
    }
    rateChageHandler(event){
    this.rateOfInterest=parseInt(event.target.value);
    }
    calculateSIHandler(event){
    this.currentOutput="Simple Interest is :"+(this.principle*this.rateOfInterest*this.noOfYears)/100;
    }
}
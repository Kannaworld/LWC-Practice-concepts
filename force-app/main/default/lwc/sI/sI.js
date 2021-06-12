import { LightningElement, track} from 'lwc';

export default class SI extends LightningElement {
    principle;
    rate;
    time;
    @track si;

    principleChangeHandler(event)
    {
    this.principle=event.target.value;
    }
    timeChangeHandler(event)
    {
    this.time=event.target.value;
    }
    interestChangeHandler(event)
    {
    this.rate=event.target.value;
    }
    calculateChangeHandler(event)
    {
    this.si=(this.principle*this.time*this.rate)/100;
    }
}
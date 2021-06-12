import { LightningElement,track } from 'lwc';

export default class Calculator extends LightningElement {
    first='';
    second='';
    @track answer=0;
    firstChangeHandler(event)
    {
    this.first=parseInt(event.target.value);
    }
    secondChangeHandler(event)
    {
    this.second=parseInt(event.target.value);
    }
    addChangeHandler(event)
    {
    this.answer=this.first+this.second;
    }
    subChangeHandler(event)
    {
    this.answer=this.first-this.second;
    }
    multiChangeHandler(event)
    {
    this.answer=this.first/this.second;
    }
}
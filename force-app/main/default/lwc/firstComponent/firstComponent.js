import { LightningElement, track } from 'lwc';

export default class FirstComponent extends LightningElement {
    @track name;
    @track address;
    @track place;
    @track show=true;
    
    nameChangeHandler(event)
    {
     this.name=event.target.value;   
    }
    addressChangeHandler(event)
    {
     this.address=event.target.value;   
    }
    placeChangeHandler(event)
    {
     this.place=event.target.value;   
    }
    buttonchangeHandler(event)
    {
    this.show=false;
    }
    againchangeHandler()
    {
    this.show=true;
    }
}
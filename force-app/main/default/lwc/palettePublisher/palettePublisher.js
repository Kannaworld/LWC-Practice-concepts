import { LightningElement , track, wire} from 'lwc';
import {fireEvent} from 'c/pubsub';
import {currentPageReference} from 'lightning/navigation';

export default class PalettePublisher extends LightningElement {
    @track color;
    @wire(currentPageReference) pageRef;
    colorCodeOptions=[
        {label:"Greem" ,value:"greem"},
        {label:"Red" ,value:"red"},
        {label:"Yellow" ,value:"yellow"},
        {label:"Blue" ,value:"blue"}

    ];
    changeColor(event)
    {
        this.color=event.target.value;
    }
    handleChangeColor(event)
    {
        console.log("color ->"+this.color);
        fireEvent(this.pageRef,"changedColor",this.color);
    }

}
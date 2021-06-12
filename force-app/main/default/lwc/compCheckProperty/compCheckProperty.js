import { LightningElement,track } from 'lwc';

export default class CompCheckProperty extends LightningElement {
    name="ram";

    nameChangeHandler(event)
    {
        this.name=event.target.value;
    }
}
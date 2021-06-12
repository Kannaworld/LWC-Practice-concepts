import { LightningElement } from 'lwc';

export default class ParentCompo extends LightningElement {
    handleChangeEvent(event)
    {
        this.template.querySelector('c-child-compo').changeMessage(event.target.value);
    }
}
import { LightningElement } from 'lwc';

export default class BoolParent extends LightningElement {
    constructor()
    {
        super();
        console.log("Constructor on the parent is called")
    }
    connectedCallback()
    {
        console.log("Connected call back on the parent is called")
    }
    renderedCallback()
    {
        console.log("rendered call back on the parent is called")
    }
    disconnectedCallback()
    {
        console.log("disconnected call back on the parent is called")
    }
}
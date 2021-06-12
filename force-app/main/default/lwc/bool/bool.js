import { LightningElement,api } from 'lwc';

export default class Bool extends LightningElement {
    @api show=false;

    constructor()
    {
        super();
        console.log("Constructor on the child is called")
    }
    connectedCallback()
    {
        console.log("Connected call back on the child is called")
    }
    renderedCallback()
    {
        console.log("rendered call back on the child is called")
    }
    disconnectedCallback()
    {
        console.log("disconnected call back on the child is called")
    }
}
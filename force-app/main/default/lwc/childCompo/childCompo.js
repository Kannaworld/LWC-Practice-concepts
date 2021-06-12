import { LightningElement, track, api} from 'lwc';

export default class ChildCompo extends LightningElement {
    @track message;
    
    @api
    changeMessage(strString)
    {
       this.message=strString.toUpperCase();
    }
}
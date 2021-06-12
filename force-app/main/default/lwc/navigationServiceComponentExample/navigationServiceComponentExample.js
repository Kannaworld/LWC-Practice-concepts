import { LightningElement,api } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';


export default class NavigationServiceComponentExample extends NavigationMixin(LightningElement) {

    @api recordId;

    navigateToHomepageHandler()
    {
        this[NavigationMixin.Navigate]({
            type : 'standard__namedPage',
            attributes :{
                pageName: 'home'
            }

        });
    }
    
    navigateToRecordHandler(){
        this[NavigationMixin.Navigate]({
            type : 'standard__recordPage',
                attributes :{
                    recordId :'this.recordId',
                    objectApiName :'Account',
                    actionName :"new"
                }
    


            

        });
    }

    navigateToYouTubedHandler()
    {
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'https://www.youtube.com/'
            }
        });

    }

}
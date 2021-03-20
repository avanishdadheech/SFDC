import { LightningElement ,wire,track} from 'lwc';
import getAccount from '@salesforce/apex/Account100.getAccount';

export default class Account100 extends LightningElement {

 @track accounts;
 @track error;
 @track customer = [{name:'Avanish', id:'123'},{name:'Avanish222', id:'99123'}

 ];
 @wire( getAccount )
    wiredAccounts({data, error}){
            if(data){
                this.accounts = data;
                this.error = undefined;
            }
            else if (error) {
                this.error = error;
                                this.accounts = undefined;
            }
        }

 }





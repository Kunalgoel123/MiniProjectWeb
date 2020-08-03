
import{ ContactModel} from './ContactModel';
 export class ContactService{
     contacts:ContactModel[];
     
     constructor(){

        this.contacts=[];

         var contact1,contact2,contact3,contact4,contact5;

         this.contact1=new ContactModel();
         this.contact2=new ContactModel();
         this.contact3=new ContactModel();
         this.contact4=new ContactModel();
         this.contact5=new ContactModel();
         
        contact1.firstname="Eric";
        contact1.lastname="Elliot";
        contact1.mob="222-555-6575";
        
        contact2.firstname="Steve";
        contact2.lastname="Jobs";
        contact2.mob="220-657-6754";
        
        contact3.firstname="Fred";
        contact3.lastname="Allen";
        contact3.mob="210-657-876";

        contact4.firstname="Steve";
        contact4.lastname="Wozniak";
        contact4.mob="343-675-8786";

        contact5.firstname="Bill";
        contact5.lastname="Gates";
        contact5.mob="234-567-9789";

        this.contacts.push(contact1);
        this.contacts.push(contact2);
        this.contacts.push(contact3);
        this.contacts.push(contact4);
        this.contacts.push(contact5);
    }

getContacts():ContactModel[]{
 return this.contacts;
}

 }
import { Component, OnInit } from '@angular/core';
import{ContactModel} from './ContactModel';
import{ContactService} from './contact.service';

@Component({
  selector: 'app-contactfinal',
  templateUrl: './contactfinal.component.html',
  styleUrls: ['./contactfinal.component.css']
})
export class ContactfinalComponent implements OnInit {

contacts:ContactModel[];
contactsearch:ContactModel[];
contact:ContactModel;
search:ContactModel;
element:ContactModel;
delt:boolean;
fun:boolean;
add:boolean;
test:string;

  constructor(private contactser:ContactService) { 
   this.contacts=[];
   this.contactsearch=[];
   this.add=false;
   this.fun =false;
   this.contact=new ContactModel();
   this.element=new ContactModel();
   this.contacts=this.contactser.getContacts();
   this.contacts.sort((a, b) => (a.firstname > b.firstname) ? 1 : -1);
  }

  ngOnInit(): void {
  }
  
  Add()
  { 
    this.add=true;
  }

  searching()
  {
    if(this.test!="")
    {     
      for(let i=0;i<this.contacts.length;i++)
      {
        if(this.test==this.contacts[i].lastname)
        {
          this.element=this.contacts[i];
          this.contactsearch.push(this.element);
          this.element=new ContactModel();
        }
        this.fun=true;
      }
    }
    else if(this.test=="")
    {
      this.fun=false;
      this.element=new ContactModel();
      this.contactsearch=[];  
    }
  }

  cancel()
  {
    this.add=false;
  }

  delete(p)
  {  
    this.delt=true; 
    this.contacts.splice(this.contacts.indexOf(p),1); 
  }

  save()
  { 
    this.contacts.push(this.contact);
    this.contact=new ContactModel();
    this.add=false;
    this.contacts.sort((a, b) => (a.firstname > b.firstname) ? 1 : -1);
  }

}
  





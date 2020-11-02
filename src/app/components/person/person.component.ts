import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { NgForm } from '@angular/forms';
import { PersonModel } from 'src/app/models/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent{

  personRQ = new PersonModel();
  personRS:any = null;
  mensajeError: string = null;
  loading: boolean;

  constructor(
    private personService: PersonService) {
  }

  getPerson(form : NgForm){
    this.personRS = null;
    this.mensajeError = null;
    this.loading = true;
    if (form.valid) {
      this.personService.getPerson(this.personRQ).subscribe((response: any) => {
        this.personRS = response;
        this.loading = false;
      }, (errorServicio) => {
        this.mensajeError = errorServicio.message;
        this.loading = false;
      });
    } else {
      this.mensajeError = "Debe ingresar los datos requeridos"
      this.loading = false;
      
    }
    
  }

}

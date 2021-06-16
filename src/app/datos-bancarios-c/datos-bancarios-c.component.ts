import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-datos-bancarios-c',
  templateUrl: './datos-bancarios-c.component.html',
  styleUrls: ['./datos-bancarios-c.component.css']
})
export class DatosBancariosCComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formbuilder: FormBuilder) { 
    this.formGroup = formbuilder.group({
      pais: '',
      iban: '',
      entidad: '',
      sucursal: new FormControl('0000', [Validators.required, this.myValidator])
    });
  }

  myValidator(formControl: FormControl) : ValidationErrors | null{
    return (formControl.value === '0000')? {error: 'Valor inválido: "0000" no existe'} : null;
  }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.formGroup);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-datos-bancarios-c',
  templateUrl: './datos-bancarios-c.component.html',
  styleUrls: ['./datos-bancarios-c.component.css']
})
export class DatosBancariosCComponent implements OnInit {

  formGroup: FormGroup;
  sucursalControl: FormControl;

  constructor(private formbuilder: FormBuilder) { 
    this.sucursalControl = new FormControl('0000', [Validators.required, this.myValidator]);
    this.formGroup = formbuilder.group({
      pais: '',
      iban: '',
      entidad: '',
      sucursal: this.sucursalControl
    });
    this.sucursalControl.valueChanges.subscribe((x)=> console.log(x));
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

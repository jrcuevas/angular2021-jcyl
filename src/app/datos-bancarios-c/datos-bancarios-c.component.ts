import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      sucursal: ''
    });
  }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.formGroup);
  }

}

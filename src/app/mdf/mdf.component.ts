import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component( {
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: [ './mdf.component.css' ]
} )
export class MDFComponent implements OnInit {
  Employeedetails: FormGroup;

  constructor () {
    this.Employeedetails = new FormGroup( {
      empno: new FormControl(),
      empname: new FormControl( '', Validators.required ),
      age: new FormControl(),
      AddressDetails: new FormGroup( {
        houseno: new FormControl(),
        buildingname: new FormControl(),
        street: new FormControl( '', [ Validators.required, Validators.maxLength( 9 ), Validators.minLength( 3 ) ] ),
        city: new FormControl(),
        pincode: new FormControl(),
        country: new FormControl()
      } )
    } );
  }
  DisplayOnConsole (): void {
    console.log( "::::::::::Employee Details::::::::::" );
    console.log( this.Employeedetails.value );
    console.log( "::::::End of Employee Details:::::::" );
  }

  ngOnInit (): void {
  }

}

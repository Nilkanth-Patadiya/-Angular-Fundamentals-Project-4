import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: [ './tdf.component.css' ],
  styles: [ `input.ng-invalid{border-left:5px solid red;}
input.ng-valid{border-left:5px solid green;}` ]
} )
export class TDFComponent implements OnInit {

  constructor () { }

  DisplayOnConsole ( formdata: any ) {
    console.log( "::::::::::Employee Details::::::::::" );
    console.log( "Employee Number = " + formdata.empno );
    console.log( "Employee Name = " + formdata.empname );
    console.log( "Employee Age = " + formdata.age );
    console.log( "====Employee Address Details======= " );
    console.log( "House No = " + formdata.AddressDetails.houseno );
    console.log( "Building Name = " + formdata.AddressDetails.buildingname );
    console.log( "Street = " + formdata.AddressDetails.street );
    console.log( "City = " + formdata.AddressDetails.city );
    console.log( "PinCode = " + formdata.AddressDetails.pincode );
    console.log( "Country = " + formdata.AddressDetails.country );
    console.log( "::::::End of Employee Details:::::::" );
  }


  ngOnInit (): void {
  }

}

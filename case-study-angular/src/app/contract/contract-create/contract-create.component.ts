// import {Component, OnInit} from '@angular/core';
// import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
// import {Customer} from '../../model/customer';
// import {CustomerService} from '../../service/customer.service';
// import {Facility} from '../../model/facility';
// import {error} from 'protractor';
// import {Router} from '@angular/router';
//
// @Component({
//   selector: 'app-contract-create',
//   templateUrl: './contract-create.component.html',
//   styleUrls: ['./contract-create.component.css']
// })
// export class ContractCreateComponent implements OnInit {
//   contractFormGroup: FormGroup = new FormGroup({
//     contractId: new FormControl(''),
//     dateFormGroup: new FormGroup({
//       startDate: new FormControl('', this.checkStartDate),
//       endDate: new FormControl('')
//     }, this.checkEndDate),
//     deposit: new FormControl('', [Validators.required, Validators.pattern('^[1-9][0-9]*$')]),
//     customer: new FormControl('', [Validators.required]),
//     facility: new FormControl('', [Validators.required]),
//   });
//   customerList: Customer[];
//   facility: Facility[];
//
//   private checkEndDate(abstractControl: AbstractControl): any {
//     return null;
//   }
//
//   private checkStartDate(abstractControl: AbstractControl): any {
//     return null;
//   }
//
//   constructor(private customerService: CustomerService,
//               private router: Router) {}
//
//   ngOnInit(): void {
//     this.customerService.findAllCustomer().subscribe(
//         (next: any) => {
//         this.customerList = next;
//       },
//       error => {
//         console.log(error);
//       },
//       complete => {
//
//       }
//     );
//   }
// }

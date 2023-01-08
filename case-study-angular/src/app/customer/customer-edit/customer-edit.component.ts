import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';
import {normalizeFileReplacements} from '@angular-devkit/build-angular/src/utils';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerFormGroup?: FormGroup;
  customerId?: number;
  customerTypeList?: CustomerType[];
  minDate = (new Date().getFullYear() - 80) + '-01-01';
  maxDate = (new Date().getFullYear() - 18) + '-12-31';

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerService.findAllCustomerType().subscribe(next => {
      this.customerTypeList = next;
    });
    this.customerId = Number(this.activatedRoute.snapshot.params.id);
    this.customerService.getById(this.customerId).subscribe(customer => {
      this.customerFormGroup = new FormGroup({
        customerName: new FormControl(customer.customerName, Validators.required),
        customerBirthday: new FormControl(customer.customerBirthday, this.checkAgeFrom18To80),
        customerGender: new FormControl(customer.customerGender, Validators.required),
        customerIdCard: new FormControl(customer.customerIdCard, [Validators.required, Validators.pattern('^[0-9]{9}$|^[0-9]{12}')]),
        customerPhone: new FormControl(customer.customerPhone, [Validators.required, Validators.pattern('0|[(]84[)][+])9[0-1]')]),
        customerEmail: new FormControl('', [Validators.required, Validators.email]),
        customerAddress: new FormControl('', Validators.required),
        customerType: new FormControl('', Validators.required)
      });
    }, error => {
      console.log(error);
    }, () => {
      console.log('OK!');
    });
  }

  checkAgeFrom18To80(abstractControl: AbstractControl): any {
    const formYear = Number(abstractControl.value.substr(0,4));
    const curYear = new Date().getFullYear();
    // trong khoảng từ 18 đến 80 tuổi: đúng thì trả về null, sai thì gán giá trị true cho lỗi
    return (curYear - formYear >= 18 && curYear - formYear <= 80) ? null : false;
  }
}


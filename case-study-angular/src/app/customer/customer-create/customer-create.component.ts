import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerFormGroup: FormGroup = new FormGroup({
    customerName: new FormControl('', Validators.required),
    customerBirthday: new FormControl('', this.checkMinAge18AndMaxAge80),
    customerGender: new FormControl('', Validators.required),
    customerIdCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{9}$|^\\d{12}$')]),
    customerPhone: new FormControl('', [Validators.required, Validators.pattern('(0|[(]84[)][+])9[01]\\d{7}')]),
    customerEmail: new FormControl('', [Validators.required, Validators.email]),
    customerAddress: new FormControl('', Validators.required),
    customerType: new FormControl('', Validators.required)
  });

  customerTypeList: CustomerType[] = [];

  minDate = (new Date().getFullYear() - 80) + '-01-01';
  maxDate = (new Date().getFullYear() - 18) + '-12-31';

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerService.findAllCustomerType().
    subscribe(next => {
      this.customerTypeList = next;
    });
  }

  checkMinAge18AndMaxAge80(abstractControl: AbstractControl): any {
    const formYear = new Date(abstractControl.value).getFullYear();
    const curYear = new Date().getFullYear();

    return (curYear - formYear >= 18 && curYear - formYear <= 80) ? null : {invalid18_80: true};
  }

  submit(): void {
    const customer = this.customerFormGroup.value;
    this.customerService.addCustomer(customer)
      .subscribe(() => {this.customerFormGroup.reset();
    }, error => {
      console.log(error);
    }, () => {
      Swal.fire({
        title: 'Thêm mới thành công!',
        text: 'Khách hàng: ' + customer.customerName,
        // imageUrl: 'https://genk.mediacdn.vn/2018/9/20/a2989534790f069f03671d247dd5222b-15374152422351400600667.gif',
        imageUrl: 'https://i.giphy.com/media/GRSnxyhJnPsaQy9YLn/giphy.webp',
        imageHeight: 250,
        imageWidth: 400
      });
      this.router.navigateByUrl('customer/list');
      console.log('Thêm mới khách hàng thành công!');
    });
  }
}


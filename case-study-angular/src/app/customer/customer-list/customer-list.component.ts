import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerType} from '../../model/customer-type';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  // customer: Customer = {};
  customerTypeList: CustomerType[] = [
    {
      id: 1,
      customerTypeName: 'Diamond',
    },
    {
      id: 2,
      customerTypeName: 'Platinum',
    }
  ];
  customerList: Customer[] = [
    {
      id: 1,
      customerName: 'Anh Hoang',
      customerBirthday: '1994-07-28',
      customerGender: 1,
      customerIdCard: '201717556',
      customerPhone: '0905667332',
      customerEmail: 'anhhoang123@gmail.com',
      customerAddress: 'Đà Nẵng',
      customerType: this.customerTypeList[0],
    },
    {
      id: 2,
      customerName: 'Nguyễn Minh Bâng',
      customerBirthday: '1996-05-09',
      customerGender: 2,
      customerIdCard: '207878445',
      customerPhone: '0905447992',
      customerEmail: 'minhbang887@gmail.com',
      customerAddress: 'Quảng Bình',
      customerType: this.customerTypeList[1],
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}

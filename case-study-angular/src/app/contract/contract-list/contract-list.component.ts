import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerType} from '../../model/customer-type';
import {Contract} from '../../model/contract';
import {Facility} from '../../model/facility';
import {RentType} from '../../model/rent-type';
import {FacilityType} from '../../model/facility-type';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  rentTypeList: RentType[] = [
    {
      id: 1,
      rentTypeName: 'year',
    },
    {
      id: 2,
      rentTypeName: 'month',
    },
    {
      id: 3,
      rentTypeName: 'day',
    },
    {
      id: 4,
      rentTypeName: 'hour',
    }
  ];
  facilityTypeList: FacilityType[] = [
    {
      id: 1,
      facilityTypeName: 'Villa'
    },
    {
      id: 1,
      facilityTypeName: 'House',
    },
    {
      id: 1,
      facilityTypeName: 'Room',
    },
  ];
  facilityList: Facility[] = [
    {
      id: 1,
      facilityName: 'Villa A',
      facilityArea: 40,
      rentCost: 500,
      maxPeople: 12,
      standardRoom: 'Good',
      descriptionOtherConvenience: 'Good',
      poolArea: 20,
      numberOfFloors: 12,
      rentType: this.rentTypeList[0],
      facilityType: this.facilityTypeList[2],
      facilityImage: 'https://tbb-prod-apac.imgix.net/attachments/room_type_photos/images/722773/722773/160407105.jpg?auto=format,compress&fit=crop&crop=entropy&w=1536&q=75',
    },
    {
      id: 2,
      facilityName: 'House B',
      facilityArea: 22,
      rentCost: 77000,
      maxPeople: 16,
      standardRoom: 'Perfect',
      descriptionOtherConvenience: 'Very Good',
      poolArea: 4000,
      numberOfFloors: 8,
      rentType: this.rentTypeList[1],
      facilityType: this.facilityTypeList[2],
      facilityImage: 'https://tbb-prod-apac.imgix.net/attachments/room_type_photos/images/723996/723996/DSC_0698.jpg?auto=format,compress&fit=crop&crop=entropy&w=1536&q=75',
    },
  ];
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
  contractList: Contract[] = [
    {
      id: 1,
      startDate: '2022-02-11',
      endDate: '2022-02-20',
      deposit: 20000,
      customer: this.customerList[0],
      facility: this.facilityList[0],
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}

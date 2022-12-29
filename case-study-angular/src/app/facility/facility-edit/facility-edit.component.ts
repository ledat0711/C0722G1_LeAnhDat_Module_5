import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityType} from '../../model/facility-type';
import {RentType} from '../../model/rent-type';
import {Facility} from '../../model/facility';
import {Router} from '@angular/router';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {

  facilityFormGroup: FormGroup = new FormGroup({
    facilityName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
    facilityArea: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
    rentCost: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
    maxPeople: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
    standardRoom: new FormControl(''),
    descriptionOtherConvenience: new FormControl(''),
    poolArea: new FormControl(''),
    numberOfFloors: new FormControl(''),
    facilityFree: new FormControl(''),
    rentType: new FormControl('', Validators.required),
    facilityType: new FormControl('', Validators.required),
    facilityImage: new FormControl('', Validators.required)
  });
  facilityTypeList!: FacilityType[];
  rentTypeList!: RentType[];
  facilityType: FacilityType = {
    id: 4,
    facilityTypeName: ''
  };
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
      rentCost: 50000,
      maxPeople: 12,
      standardRoom: 'Good',
      descriptionOtherConvenience: 'Good',
      poolArea: 2000,
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
  constructor() {
  }

  ngOnInit(): void {
  }

}

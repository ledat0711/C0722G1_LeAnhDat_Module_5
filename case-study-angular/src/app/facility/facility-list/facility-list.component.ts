import {Component, OnInit} from '@angular/core';
import {RentType} from '../../model/rent-type';
import {FacilityType} from '../../model/facility-type';
import {Facility} from '../../model/facility';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
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

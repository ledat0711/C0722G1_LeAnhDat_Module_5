import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerNameSearch = '';
  customerAddressSearch = '';
  customerPhoneSearch = '';
  customerListPaging!: Customer[];
  numberRecord = 5;
  curPage = 1;
  totalPage!: number;
  customerNameDelete!: string;
  customerIdDelete!: number;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customerService.findAllCustomerSearch(this.customerNameSearch, this.customerAddressSearch, this.customerPhoneSearch)
      .subscribe(list => {
          this.totalPage = Math.ceil(list.length / this.numberRecord);
        }, error => {
          console.log(error);
        }, () => {
          console.log('OK!');
        }
      );

    this.customerService.findCustomerSearchPaging(this.numberRecord, this.curPage,
      this.customerNameSearch, this.customerAddressSearch, this.customerPhoneSearch)
      .subscribe(pagingList => {
        this.customerListPaging = pagingList;
      }, error => {
        console.log(error);
      }, () => {
        console.log('Hiển thị khách hàng ở trang' + this.curPage);
      });
  }

  getInfoCustomerDelete(customerName: string, customerId: number): void {
    this.customerNameDelete = customerName;
    this.customerIdDelete = customerId;
  }

  next(): void {
    this.curPage++;
    this.ngOnInit();
  }

  previous(): void {
    this.curPage--;
    this.ngOnInit();
  }

  searchByMore(): void {
    this.curPage = 1;
    this.ngOnInit();
  }

  deleteCustomer(): void {
    this.curPage = 1;
    this.customerService.deleteCustomer(this.customerIdDelete)
      .subscribe(() => {
        Swal.fire({
          icon: 'success',
          title: 'Xóa thành công!',
          text: 'Khách hàng: ' + this.customerNameDelete,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
        this.ngOnInit();
      }, error => {
        console.log(error);
      }, () => {
        console.log('Hoàn thành xóa khách hàng');
      });
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private API_URL = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {
  }

  findAllCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL + 'customers');
  }

  findAllCustomerSearch(nameSearch: string, addressSearch: string, phoneSearch: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL +
      'customers?customerName_like=' + nameSearch + '&customerAddress_like=' + addressSearch + '&customerPhone_like=' + phoneSearch);
  }

  findCustomerSearchPaging(numberRecord: number, curPage: number,
                           nameSearch: string, addressSearch: string, phoneSearch: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL + 'customers?_page=' + curPage + '&_limit=' + numberRecord +
      '&customerName_like=' + nameSearch + '&customerAddress_like=' + addressSearch + '&customerPhone_like=' + phoneSearch);
  }

  deleteCustomer(id: number | undefined): Observable<Customer> {
    return this.httpClient.delete<Customer>(this.API_URL + 'customers/' + id);
  }
}

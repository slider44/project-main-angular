import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL: string = "http://localhost:4200/api/";

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient.get(this.API_URL + 'products');
  }

  getProduct(productId) {
    return this.httpClient.get(`${this.API_URL + 'products'}/${productId}`)
  }

  deleteProduct(productId) {
    return this.httpClient.delete(this.API_URL + 'products/' + productId);
  }

  updateProduct(body: any) {
    const myheader = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put(this.API_URL, body, {headers: myheader});
  }
}

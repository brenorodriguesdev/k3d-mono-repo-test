import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})
export class AppService {
    constructor(private http: HttpClient) { }

    createProduct(name: string) {
        return this.http.post(environment.apiURL + 'create-product', { name })
    }
}
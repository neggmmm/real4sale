import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class ApiService {
    private baseUrl = environment.apiUrl;
    constructor(private http: HttpClient) { }

    get<T>(endpoint: string) {
        return this.http.get<T>(`${this.baseUrl}${endpoint}`,{
            withCredentials: true
        });
    }

    post<T>(endpoint: string, body: any) {
        return this.http.post<T>(`${this.baseUrl}${endpoint}`, body,{
            withCredentials: true
        });
    }

    patch<T>(endpoint: string, body: any) {
        return this.http.patch<T>(`${this.baseUrl}${endpoint}`, body,{
            withCredentials: true
        });
    }

    delete<T>(endpoint: string) {
        return this.http.delete<T>(`${this.baseUrl}${endpoint}`,{
            withCredentials: true
        });
    }
}
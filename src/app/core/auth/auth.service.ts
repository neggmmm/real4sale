import { Injectable } from "@angular/core";
import { ApiService } from "../api/api.service";

@Injectable({providedIn:'root'})
export class AuthService{
    constructor(private api: ApiService){}

    login(data:{email:string,password:string}){
        return this.api.post('/auth/login',data)
    }
}
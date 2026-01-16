import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
   private readonly tokenKey = "auth_token";

    //login functionality
    login(username: string, password: string) : boolean {
        if(username === 'admin' && password === 'admin') {
            localStorage.setItem(this.tokenKey, 'mock-jwt-token');
            return true;
        }
        return false;
    }

    //logout
    logout() : void {
        localStorage.removeItem(this.tokenKey);
    }

    isAuthenticated(): boolean {
        return !!localStorage.getItem(this.tokenKey);
    }

    getToken(): string | null {
        return localStorage.getItem(this.tokenKey);
    }
}

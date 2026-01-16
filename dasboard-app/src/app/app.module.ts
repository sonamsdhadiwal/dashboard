import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AuthInterceptor } from "./core/interceptors/auth.interceptor";

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }],
    bootstrap:[]
})

export class AppModule {}
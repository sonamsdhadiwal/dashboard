import { LoginComponent } from "./features/auth/login/login.component";
import { DashboardComponent } from "./features/dashboard/dashboard.component";
import { AuthGuard } from "./core/guards/auth.guard";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

const routes : Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
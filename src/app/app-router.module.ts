import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FlightsComponent } from "./flights/flights.component";


const routes: Routes = [
    {path: '', component: FlightsComponent},
    {path: 'fligths', component: FlightsComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule {}

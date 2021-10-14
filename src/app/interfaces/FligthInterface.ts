import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";
import { logging } from "selenium-webdriver";



export interface FlightInterface {

    Id: number;
    DepartureStation: string;
    ArrivalStation: string;
    DepartureDate: Date;
    Transport: string;
    Currency: string;
    FligthTime: string;
    
}
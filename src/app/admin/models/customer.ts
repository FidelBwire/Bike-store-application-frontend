import { Name } from "./name";

export interface Customer {
   id: number;
   name: Name; 
   phone: string;
   email: string;
   street: string;
   city: string;
   state: string;
   zipCode: number;
}

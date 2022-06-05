import { Name } from "./name";

export interface Staff {
   id: number;
   name: Name;
   phone: string;
   email: string;
   active: number;
   storeId: number;
   managerId: number;
}

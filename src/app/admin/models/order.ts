export interface Order {
   id: number;
   customerId: number;
   orderStatus: number;
   orderDate: Date;
   requiredDate: Date;
   shippedDate: Date;
   storeId: number;
   staffId: number;
}

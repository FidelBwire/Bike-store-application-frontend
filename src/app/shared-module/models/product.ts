export class Product {
   id!: number;
   name!: string;
   brandId!: number;
   categoryId!: number;
   modelYear!: number;
   listPrice!: number;
   description!: string;

   Product(name: string, brandId: number, categoryId: number, modelYear: number,
               listPrice: number, description: string){
      this.name = name;
      this.brandId = brandId;
      this.categoryId = categoryId;
      this.modelYear = modelYear;
      this.listPrice = listPrice;
      this.description = description;
   }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
    private categories=['Electronics','Books','Clothing','Home Appliances'];
    getAllCategories() {
      return this.categories;
    }
}

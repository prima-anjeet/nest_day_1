import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products =[
        {id:1, name:'Product 1', description:'Description for Product 1', price:100},
        {id:2, name:'Product 2', description:'Description for Product 2', price:200},
        {id:3, name:'Product 3', description:'Description for Product 3', price:300},
    ];
    getAllProducts(){
        return this.products;
    }
    getProductById(id:number){
        if(id<=this.products.length && id>0){
            return this.products.find(p=>p.id===id);
        }else{
            return {message: 'Product not found'};
        }
    }
}


import { Controller, Get } from '@nestjs/common';

@Controller('user')// decorator 
export class UserController {
    @Get()
    getUser():string {
        return "anjeet singh";
    }
     @Get('/location')
    getUserLocation():string {
        return "location: India";
    }
    @Get('/address')
    getUserAddress():string {
        return "address: lucknow, Uttar Pradesh, India";
    }
}

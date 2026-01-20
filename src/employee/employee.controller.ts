import { Controller, Get,Post,Param ,Body} from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    
    constructor (private readonly employeeService: EmployeeService){}
    @Get()
    getEmployees(){
        return this.employeeService.getAllEmployees();  
    }
    @Get(':id')
    getEmployee(@Param('id') id:string){
        return this.employeeService.getEmployeeById(Number(id));
    }
    @Post('add')
    addEmployee(@Body() body:any){
        return this.employeeService.addEmployee(body);
    }
}

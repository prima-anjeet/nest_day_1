import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
    private employees=[
        {id:1, name:'John Doe', position:'Software Engineer', department:'IT'},
        {id:2, name:'Jane Smith', position:'Project Manager', department:'Operations'},
        {id:3, name:'Mike Johnson', position:'Designer', department:'Creative'},
    ]
    getAllEmployees(){
        return this.employees;    
    }
    getEmployeeById(id:number){
        if(id<=this.employees.length && id>0){
            return this.employees.find(e=>e.id===id);
        }else{
            return {message: 'Employee not found'};
        }
    }
    addEmployee(body:any){
        this.employees.push(body);
        return {message: 'Employee added successfully'};
    }
}

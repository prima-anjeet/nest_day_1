import { Controller, Get,Param, Post,Body, Put ,Delete, Patch } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService){}
    @Get()
    getAllStudents(){
        return this.studentService.getAllStudents();
    }
    @Get(':id')
    getStudentById(@Param('id') id:string){
        return this.studentService.getStudentById(Number(id));
    }
    @Post()
    createStudent(@Body() data:{name:string,age:number}){
        return this.studentService.createStudent(data);
    }
    @Put(':id')
    putUpdateStudent(@Param('id') id:string,@Body() data:{name:string,age:number}){
        return this.studentService.putUpdateStudent(Number(id),data);
    }
    @Patch(':id')
    patchUpdateStudent(@Param('id') id:string,@Body() data:Partial<{name:string,age:number}>){
        return this.studentService.patchUpdateStudent(Number(id),data);
    }
    @Delete(':id')
    deleteStudent(@Param('id') id:string){
        return this.studentService.deleteStudent(Number(id));
    }
}

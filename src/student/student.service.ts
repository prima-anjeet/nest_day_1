import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students = [
        { id: 1, name: 'Alice', age: 20 },
        { id: 2, name: 'Bob', age: 22 },
        { id: 3, name: 'Charlie', age: 23 },
    ];
    getAllStudents(){
        return this.students;    
    }
    getStudentById(id:number){
      const student=this.students.find(student=>student.id===id);
      if(!student) throw new NotFoundException('Student not found'); 
      return student;
    }

    createStudent( data:{name:string,age:number}){
        const newStudent ={id:this.students.length+1,...data}
        this.students.push(newStudent);
        return newStudent;
    }
    putUpdateStudent(id:number,data:{name:string,age:number}){
        const studentIdx=this.students.findIndex(s=>s.id===id);
        if(studentIdx===-1) throw new NotFoundException('Student not found');
        const updatedStudent={id,...data};
        this.students[studentIdx]=updatedStudent;
        return updatedStudent;
    }
     patchUpdateStudent(id:number, data: Partial<{name:string,age:number}>){
        const studentIdx=this.students.findIndex(s=>s.id===id);
        if(studentIdx===-1) throw new NotFoundException('Student not found');
        const student=this.students[studentIdx];
        const updatedStudent=Object.assign(student, data);
        return updatedStudent;
    }
    deleteStudent(id:number){
        const studentIdx=this.students.findIndex(s=>s.id==id);
        if(studentIdx===-1) throw new NotFoundException('Student not found');
        this.students.splice(studentIdx,1);
        return {message:'Student deleted successfully',students:this.students};
    }
}

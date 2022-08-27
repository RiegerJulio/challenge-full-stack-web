import { Student } from "@prisma/client";
import IStudentDTO from "../DTOs/IStudentDTO";
import IStudentRepository from "../interfaces/IStudentRepository";

export default class StudentRepositoryInMemory implements IStudentRepository {

  students: Student[] = [];

  async create({ name, email, ra, cpf }: IStudentDTO): Promise<void> {
    const student = {
      name,
      email,
      ra,
      cpf,
    };

    this.students.push(student);
  }

  async findByRa(ra: string): Promise<Student> {
    const student = this.students.find((student) => student.ra === ra);

    return student as Student;
  }

  async list(): Promise<Student[]> {
    const allStudents = this.students;

    return allStudents;
  }

  async update({ name, email, ra }: IStudentDTO): Promise<void> {
    const studentIndex = this.students.findIndex((student) => student.ra === ra);

    this.students[studentIndex].name = name;
    this.students[studentIndex].email = email;
  }

  async destroy(ra: string): Promise<void> {
    const studentIndex = this.students.findIndex((student) => student.ra === ra);

    this.students.splice(studentIndex, 1);
  }
  
}
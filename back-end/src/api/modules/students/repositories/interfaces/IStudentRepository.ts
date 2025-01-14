import { Student } from "@prisma/client";
import IStudentDTO from "../DTOs/IStudentDTO";

export default interface IStudentRepository {
  create({ name, email, ra, cpf }: IStudentDTO): Promise<void>;
  findByRa(ra: string): Promise<Student>;
  list(): Promise<Student[]>;
  update({ name, email, ra }: IStudentDTO): Promise<void>;
  destroy(ra: string): Promise<void>;
}
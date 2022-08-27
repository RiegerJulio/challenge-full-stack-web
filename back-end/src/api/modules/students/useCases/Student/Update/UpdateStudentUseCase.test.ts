import StudentRepositoryInMemory from '../../../repositories/in-memory/StudentRepositoryInMemory';
import ReadStudentUseCase from '../List/ReadStudentUseCase';
import CreateStudentUseCase from '../Create/CreateStudentUseCase';
import UpdateStudentUseCase from './UpdateStudentUseCase';

let studentRepositoryInMemory: StudentRepositoryInMemory;
let createStudentUseCase: CreateStudentUseCase;
let readStudentUseCase: ReadStudentUseCase;
let updateStudentUseCase: UpdateStudentUseCase;

const student = {
  name: "John Doe",
  email: "john@doe.com",
  cpf: "12345678910",
  ra: "123456",
}

const updateStudent = {
  name: "John Doe Updated",
  email: "john@doe.com",
  cpf: "12345678910",
  ra: "123456",
}

const updateStudentWrongRA = {
  name: "John Doe Updated",
  email: "john@doe.com",
  cpf: "12345678910",
  ra: "123450",
}

describe("Update Student", () => {
  beforeEach(() => {
    studentRepositoryInMemory = new StudentRepositoryInMemory();
    createStudentUseCase = new CreateStudentUseCase(studentRepositoryInMemory);
    readStudentUseCase = new ReadStudentUseCase(studentRepositoryInMemory);
    updateStudentUseCase = new UpdateStudentUseCase(studentRepositoryInMemory);
  });
  
  it("should be able to update a student", async () => {
    
    await createStudentUseCase.execute(student);

    await updateStudentUseCase.execute(updateStudent);

    expect(updateStudent).toHaveProperty("ra");
    expect(updateStudent.name).toBe("John Doe Updated");
  });

  it("should not be able to update a student that does not exist", async () => {

    await createStudentUseCase.execute(student);

    await expect(updateStudentUseCase.execute(updateStudentWrongRA)).rejects.toBeInstanceOf(Error);
    await expect(updateStudentUseCase.execute(updateStudentWrongRA)).rejects.toEqual(new Error("Student doesn't exist"));
  });

});
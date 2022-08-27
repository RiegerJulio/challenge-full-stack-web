import StudentRepositoryInMemory from '../../../repositories/in-memory/StudentRepositoryInMemory';
import ReadStudentUseCase from '../List/ReadStudentUseCase';
import CreateStudentUseCase from '../Create/CreateStudentUseCase';
import DeleteStudentUseCase from './DeleteStudentUseCase';

let studentRepositoryInMemory: StudentRepositoryInMemory;
let createStudentUseCase: CreateStudentUseCase;
let readStudentUseCase: ReadStudentUseCase;
let deleteStudentUseCase: DeleteStudentUseCase;

const student = {
  name: "John Doe",
  email: "john@doe.com",
  cpf: "12345678910",
  ra: "123456",
}

const studentRa = {
  ra: "123456",
}
const wrongStudentRa = {
  ra: "123450",
}

describe("Update Student", () => {
  beforeEach(() => {
    studentRepositoryInMemory = new StudentRepositoryInMemory();
    createStudentUseCase = new CreateStudentUseCase(studentRepositoryInMemory);
    readStudentUseCase = new ReadStudentUseCase(studentRepositoryInMemory);
    deleteStudentUseCase = new DeleteStudentUseCase(studentRepositoryInMemory);
  });
  
  it("should be able to delete a student", async () => {
      
    await createStudentUseCase.execute(student);
  
    await deleteStudentUseCase.execute(studentRa);

    const readStudents = await readStudentUseCase.execute();
  
    expect(student).toHaveProperty("ra");
    expect(student.name).toBe("John Doe");
    expect(readStudents).toHaveLength(0);
  });

  it("should not be able to delete a student that doesn't exist", async () => {
    await createStudentUseCase.execute(student);

    await expect(deleteStudentUseCase.execute(wrongStudentRa)).rejects.toBeInstanceOf(Error);
    await expect(deleteStudentUseCase.execute(wrongStudentRa)).rejects.toEqual(new Error("Student doesn't exist"));
  });
    
});
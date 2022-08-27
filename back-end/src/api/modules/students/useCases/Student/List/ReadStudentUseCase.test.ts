import StudentRepositoryInMemory from '../../../repositories/in-memory/StudentRepositoryInMemory';
import ReadStudentUseCase from './ReadStudentUseCase';
import CreateStudentUseCase from '../Create/CreateStudentUseCase';

let readStudentUseCase: ReadStudentUseCase;
let studentRepositoryInMemory: StudentRepositoryInMemory;
let createStudentUseCase: CreateStudentUseCase;

const student = {
  name: "John Doe",
  email: "john@doe.com",
  cpf: "12345678910",
  ra: "123456",
}

describe("Read Students", () => {
  beforeEach(() => {
    studentRepositoryInMemory = new StudentRepositoryInMemory();
    readStudentUseCase = new ReadStudentUseCase(studentRepositoryInMemory);
    createStudentUseCase = new CreateStudentUseCase(studentRepositoryInMemory);
  });
  it("should be able to read all students", async () => {
      
    await createStudentUseCase.execute(student);
  
    const students = await readStudentUseCase.execute();
  
    expect(students).toHaveLength(1);
    expect(students).toBeInstanceOf(Array);

  });

  it("should be able to return an empty array if there are no students", async () => {
    
    const students = await readStudentUseCase.execute();
    
    expect(students).toHaveLength(0);
    
    expect(students).toBeInstanceOf(Array);
  });
});
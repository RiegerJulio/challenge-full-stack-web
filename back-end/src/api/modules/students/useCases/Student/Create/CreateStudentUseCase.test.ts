import StudentRepositoryInMemory from '../../../repositories/in-memory/StudentRepositoryInMemory';
import CreateStudentUseCase from './CreateStudentUseCase';

let createStudentUseCase: CreateStudentUseCase;
let sudentRepositoryInMemory: StudentRepositoryInMemory;

const student = {
  name: "John Doe",
  email: "john@doe.com",
  cpf: "12345678910",
  ra: "123456",
}

describe("Create Student", () => {
  beforeEach(() => {
    sudentRepositoryInMemory = new StudentRepositoryInMemory();
    createStudentUseCase = new CreateStudentUseCase(sudentRepositoryInMemory);
  });
  it("should be able to create a new student", async () => {

    await createStudentUseCase.execute(student);

    const studentCreated = await sudentRepositoryInMemory.findByRa(student.ra);

    expect(studentCreated).toHaveProperty("ra");
  });

  it("should not be able to create a new student with same ra", async () => {
    await createStudentUseCase.execute(student);

    await expect(createStudentUseCase.execute(student)).rejects.toEqual(new Error("Student already exists"));
  });
});
import { InputText } from "primereact/inputtext";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { FormEvent, useState } from "react";
import { Button } from "primereact/button";
// import { z } from "zod";
// import { Message } from "primereact/message";

interface FormData {
  firstName: string;
  lastName: string;
  age: string;
  gender: string;
}

enum Gender {
  Male = "male",
  Female = "female",
}

const genderOption = [
  { label: "Male", value: Gender.Male },
  { label: "Female", value: Gender.Female },
];

// const schema = z.object({
//   firstName: z.string().min(3, "First name is required.").max(10),
//   lastName: z.string().min(3, "Last name is required.").max(10),
//   age: z.number().min(1, "Age is required.").max(128, "Invalid age"),
//   gender: z.nativeEnum(Gender, { message: "Gender is required" }),
// });

const ExpenseForm = () => {
  const [person, setPerson] = useState<FormData>({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(person);
  };

  return (
    <form className="card flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">First Name</label>
        <InputText
          id="firstName"
          type="text"
          value={person.firstName}
          onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="lastName">Last Name</label>
        <InputText
          id="lastName"
          type="text"
          onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="age">Age</label>
        <InputText
          id="age"
          type="number"
          onChange={(e) => setPerson({ ...person, age: e.target.value })}
        />
      </div>
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-2">
          <label htmlFor="gender">Gender</label>
          <Dropdown
            id="gender"
            value={person.gender}
            onChange={(e: DropdownChangeEvent) => {
              setPerson({ ...person, gender: e.value });
            }}
            options={genderOption}
            placeholder="Select"
          />
        </div>
        <div>
          <Button label="Submit New User" type="submit" />
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;

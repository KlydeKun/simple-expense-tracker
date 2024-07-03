import { InputText } from "primereact/inputtext";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { useState } from "react";
import { Button } from "primereact/button";
import { z } from "zod";

interface Gender {
  name: string;
}

const select = ["male", "female"] as const;

z.object({
  firstName: z.string().min(3).max(10),
  lastName: z.string().min(3).max(10),
  age: z.number().min(1).max(2),
  gender: z.enum(select),
});

const ExpenseForm = () => {
  const [selectGender, setSelectGender] = useState<Gender | null>(null);
  const genders: Gender[] = [{ name: "male" }, { name: "female" }];

  return (
    <div className="card flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">First Name</label>
        <InputText id="firstName" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="lastName">Last Name</label>
        <InputText id="lastName" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="age">Age</label>
        <InputText id="age" />
      </div>
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-2">
          <label htmlFor="gender">Gender</label>
          <Dropdown
            value={selectGender}
            onChange={(e: DropdownChangeEvent) => setSelectGender(e.value)}
            options={genders}
            optionLabel="name"
            placeholder="Select"
          />
        </div>
        <div>
          <Button label="Submit New User" />
        </div>
      </div>
    </div>
  );
};

export default ExpenseForm;

import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
// import { z } from "zod";
import { Controller, FieldValues, useForm } from "react-hook-form";

// interface FormData {
//   firstName: string;
//   lastName: string;
//   age: string;
//   gender: string;
// }

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
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form
      className="card flex flex-col gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">First Name</label>
        <InputText
          id="firstName"
          type="text"
          {...register("firstName")} // equivalent to value & onChange
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="lastName">Last Name</label>
        <InputText id="lastName" type="text" {...register("lastName")} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="age">Age</label>
        <InputText id="age" type="number" {...register("age")} />
      </div>
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-2">
          <label htmlFor="gender">Gender</label>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <Dropdown
                id="gender"
                value={field.value}
                onChange={(e) => field.onChange(e.value)}
                options={genderOption}
                placeholder="Select"
              />
            )}
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

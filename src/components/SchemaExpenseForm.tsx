import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Gender, schema } from "../validationSchema";
import { z } from "zod";
import ErrorMessage from "./ErrorMessage";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";

const genderOption = [
  { label: "Male", value: Gender.Male },
  { label: "Female", value: Gender.Female },
];

type FormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: FormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const resetSubmit = (data: FormData) => {
    onSubmit(data);
    reset();
  };

  return (
    <div>
      <form
        className="card flex flex-col gap-3"
        onSubmit={handleSubmit(resetSubmit)}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName">First Name</label>
          <IconField>
            {errors.firstName && (
              <InputIcon
                className="pi pi-exclamation-circle"
                style={{ color: "red" }}
              />
            )}
            <InputText
              id="firstName"
              type="text"
              {...register("firstName")}
              className={
                errors.firstName
                  ? "border-red-600 hover:border-red-600 w-full"
                  : "w-full"
              }
            />
          </IconField>
          <ErrorMessage>{errors.firstName?.message}</ErrorMessage>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lastName">Last Name</label>
          <IconField>
            {errors.lastName && (
              <InputIcon
                className="pi pi-exclamation-circle"
                style={{ color: "red" }}
              />
            )}
            <InputText
              id="lastName"
              type="text"
              {...register("lastName")}
              className={
                errors.lastName
                  ? "border-red-600 hover:border-red-600 w-full"
                  : "w-full"
              }
            />
          </IconField>
          <ErrorMessage>{errors.lastName?.message}</ErrorMessage>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="age">Age</label>
          <IconField>
            {errors.age && (
              <InputIcon
                className="pi pi-exclamation-circle"
                style={{ color: "red" }}
              />
            )}
            <InputText
              id="age"
              type="number"
              {...register("age", {
                valueAsNumber: true,
              })}
              className={
                errors.age
                  ? "border-red-600 hover:border-red-600 w-full"
                  : "w-full"
              }
            />
          </IconField>
          <ErrorMessage>{errors.age?.message}</ErrorMessage>
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
                  className={
                    errors.gender ? "border-red-600 hover:border-red-600" : ""
                  }
                />
              )}
            />
            <ErrorMessage>{errors.gender?.message}</ErrorMessage>
          </div>
          <div>
            <Button label="Submit New User" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;

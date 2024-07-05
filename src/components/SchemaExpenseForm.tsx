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
import axios from "axios";
import { useRef } from "react";
import { Toast } from "primereact/toast";

const genderOption = [
  { label: "Male", value: Gender.Male },
  { label: "Female", value: Gender.Female },
];

type FormData = z.infer<typeof schema>;

const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const toast = useRef<Toast>(null);

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post("http://localhost:3000/users", data);
      reset();
      showSuccess();
    } catch (error) {
      showError();
    }
  };

  const showSuccess = () => {
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Successfully added a New User!",
      life: 3000,
    });
  };

  const showError = () => {
    toast.current?.show({
      severity: "error",
      summary: "Error",
      detail: "Unexpected error occured!",
      life: 3000,
    });
  };

  return (
    <div>
      <Toast ref={toast} />
      <form
        className="card flex flex-col gap-3"
        onSubmit={handleSubmit(onSubmit)}
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
              type="numer"
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

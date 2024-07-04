import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Controller, FieldValues, useForm } from "react-hook-form";

enum Gender {
  Male = "male",
  Female = "female",
}

const genderOption = [
  { label: "Male", value: Gender.Male },
  { label: "Female", value: Gender.Female },
];

const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    reset();
  };

  return (
    <form
      className="card flex flex-col gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">First Name</label>
        <IconField>
          {errors.firstName?.type === "required" && (
            <InputIcon
              className="pi pi-exclamation-circle"
              style={{ color: "red" }}
            />
          )}
          <InputText
            id="firstName"
            type="text"
            {...register("firstName", { required: true, minLength: 3 })}
            className={
              errors.firstName?.type === "required" ||
              errors.firstName?.type === "minLength"
                ? "border-red-600 hover:border-red-600 w-full"
                : "w-full"
            }
          />
        </IconField>
        {errors.firstName && (
          <small className="text-red-600">
            {errors.firstName.type === "required" &&
              "The first name is required."}
            {errors.firstName.type === "minLength" &&
              "The first name must be at least 3 characters."}
          </small>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="lastName">Last Name</label>
        <IconField>
          {errors.lastName?.type === "required" && (
            <InputIcon
              className="pi pi-exclamation-circle"
              style={{ color: "red" }}
            />
          )}
          <InputText
            id="lastName"
            type="text"
            {...register("lastName", { required: true, minLength: 3 })}
            className={
              errors.lastName?.type === "required" ||
              errors.lastName?.type === "minLength"
                ? "border-red-600 hover:border-red-600 w-full"
                : "w-full"
            }
          />
        </IconField>
        {errors.lastName && (
          <small className="text-red-600">
            {errors.lastName.type === "required" &&
              "The last name is required."}
            {errors.lastName.type === "minLength" &&
              "The last name must be at least 3 characters."}
          </small>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="age">Age</label>
        <IconField>
          {errors.age?.type === "required" && (
            <InputIcon
              className="pi pi-exclamation-circle"
              style={{ color: "red" }}
            />
          )}
          <InputText
            id="age"
            type="text"
            {...register("age", {
              required: true || "Age is required.",
              maxLength: 2,
              pattern: /^[1-9]\d*$/,
            })}
            className={
              errors.age?.type === "required" ||
              errors.age?.type === "pattern" ||
              errors.age?.type === "maxLength"
                ? "border-red-600 hover:border-red-600 w-full"
                : "w-full"
            }
          />
        </IconField>
        {errors.age && (
          <small className="text-red-600">
            {errors.age.type === "required" && "Age is required"}
            {errors.age.type === "maxLength" && "Invalid Input Age"}
            {errors.age.type === "pattern" && "Invalid Input Age"}
          </small>
        )}
      </div>

      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-2">
          <label htmlFor="gender">Gender</label>
          <Controller
            name="gender"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Dropdown
                id="gender"
                value={field.value}
                onChange={(e) => field.onChange(e.value)}
                options={genderOption}
                placeholder="Select"
                className={
                  errors.gender?.type === "required"
                    ? "border-red-600 hover:border-red-600"
                    : ""
                }
              />
            )}
          />
          {errors.gender?.type === "required" && (
            <small className="text-red-600">Gender is required </small>
          )}
        </div>
        <div>
          <Button label="Submit New User" type="submit" />
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;

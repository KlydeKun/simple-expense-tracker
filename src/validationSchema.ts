import { z } from "zod";

export enum Gender {
  Male = "male",
  Female = "female",
}

export const schema = z.object({
  firstName: z
    .string()
    .min(3, "First name must be at least 3 characters.")
    .max(15),
  lastName: z
    .string()
    .min(3, "Last name must be at least 3 characters.")
    .max(15),
  age: z
    .number({ invalid_type_error: "Age field is required." })
    .min(1, "Invalid input age.")
    .max(128, "Invalid input age."),
  gender: z.nativeEnum(Gender, { message: "Gender field is required." }),
});

import Joi from "joi";
const pattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!$@#%&*])[A-Za-z\d!$@#%&*]{8,20}$/;

export const addUserSchema = {
  body: Joi.object()
    .required()
    .keys({
      userName: Joi.string().alphanum().min(3).max(10),
      age: Joi.number().min(15).max(99),
      password: Joi.string().regex(RegExp(pattern)).required().min(8).max(20),
      CPassword: Joi.ref("password"),
      email: Joi.string().email(),
      gender: Joi.string().valid("male", "female"),
      isVerified: Joi.boolean(),
    }),
};

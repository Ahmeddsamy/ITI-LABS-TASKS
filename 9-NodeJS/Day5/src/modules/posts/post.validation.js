import Joi from "joi";
export const addPostSchema = {
  body: Joi.object({
    title: Joi.string().min(3).max(100).required(),
    content: Joi.string().min(3).required(),
  }).required(),
};

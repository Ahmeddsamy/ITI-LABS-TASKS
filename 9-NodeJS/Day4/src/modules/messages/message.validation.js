import Joi from "joi";
export const addMessageSchema = {
  body: Joi.object()
    .required()
    .keys({
      content: Joi.string().min(3).max(30).required(),
      recievedUserID: Joi.string().hex().min(24).max(24).required(),
    }),
};

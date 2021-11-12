import Joi from 'joi';

const OrderSchema = Joi.object({
  user: Joi.string().required(),
  address: Joi.string().required(),
  items: Joi.array().min(1).items(Joi.string()).required(),
});

export default OrderSchema;

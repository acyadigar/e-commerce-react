import Joi from 'joi';

const ProductSchema = Joi.object({
  images: Joi.string(),
  name: Joi.string().required().min(1),
  description: Joi.string().min(3),
  price: Joi.number().required(),
  description: Joi.string().required()
});

export default ProductSchema;

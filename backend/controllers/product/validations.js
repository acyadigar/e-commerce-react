import Joi from 'joi';

const ProductSchema = Joi.object({
  images: Joi.string(),
  title: Joi.string().required(),
  description: Joi.string().min(3),
  price: Joi.string().required()
});

export default ProductSchema;

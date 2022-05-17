import * as yup from "yup";

const validations = yup.object().shape({
  name: yup
    .string()
    .min(1, "Ürün ismi uygun değil.")
    .required("Zorunlu alan."),
  price: yup
    .number()
    .min(1, "En az bir haneli olabilir.")
    .required(),
  description: yup
    .string()
    .min(1, "Marka ismi uygun değil.")
    .required("Zorunlu alan."),
});

export default validations;

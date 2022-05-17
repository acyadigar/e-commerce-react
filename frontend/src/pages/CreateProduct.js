import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import validationSchema from "./validations/CreateProduct";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, FloatingLabel, Alert } from "react-bootstrap";
import { addProduct, resetStatus } from "../store/productSlice";
import { useEffect } from "react";

export default function CreateProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const status = useSelector(state => state.products.status)

  useEffect(() => {
    dispatch(resetStatus())
  }, [])

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      description: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const { meta } = await dispatch(addProduct(values))
      if (meta.requestStatus === "fulfilled") return navigate("/products");
    },
  });

  return (
    <>
      <Container
        className="border my-3 p-5 col-md-6 mx-auto"
        style={{ boxShadow: "0 0 2px" }}
      >
        <h2 className="text-center mb-5 mt-0">Ürün Oluştur</h2>
        { status && <Alert variant="danger" className="text-center">
          <Alert.Heading>Başarısız</Alert.Heading>
          <hr />
          <p className="mb-0">
            {status.message}
          </p>
        </Alert> }
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicname">
            <FloatingLabel
              controlId="formBasicname"
              label="Ürün ismi"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                isInvalid={formik.touched.name && formik.errors.name}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicprice">
            <FloatingLabel
              controlId="formBasicprice"
              label="Fiyat"
              className="mb-3"
            >
              <Form.Control
                type="number"
                name="price"
                onChange={formik.handleChange}
                value={formik.values.price}
                isInvalid={formik.touched.price && formik.errors.price}
                placeholder="price"
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <FloatingLabel controlId="description" label="Açıklama" className="mb-3">
              <Form.Control
                type="text"
                name="description"
                onChange={formik.handleChange}
                value={formik.values.description}
                isInvalid={formik.touched.description && formik.errors.description}
                placeholder="price"
              />
            </FloatingLabel>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

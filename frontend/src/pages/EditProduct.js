import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import validationSchema from "./validations/CreateProduct";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Form, Button, FloatingLabel, Alert } from "react-bootstrap";
import { editProduct, resetStatus } from "../store/productSlice";
import { useEffect } from "react";
import { useQuery } from 'react-query'
import { fetchProduct } from '../store/productSlice'

export default function EditProduct() {
  const { id } = useParams()
  const { data, isLoading, isError } = useQuery(
    ['product', id], 
    () => fetchProduct(id), 
    {refetchOnMount: true, enabled: !!id}
  )
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const status = useSelector(state => state.products.status)

  useEffect(() => {
    dispatch(resetStatus())
  }, [])

  const formik = useFormik({
    initialValues: {
      id,
      name: data && data.name,
      price: data && data.price,
      description: data && data.description
    },
    validationSchema,
    onSubmit: async (values) => {
      const { meta } = await dispatch(editProduct(values))
      if (meta.requestStatus === "fulfilled") return navigate("/products");
    },
    enableReinitialize: true
  });

  if (isLoading) return <h1>Loading...</h1>
  if (isError) return <h1>Bir hata oluştu.</h1>
  
  return (
    <>
      <p>{data && JSON.stringify(data)}</p>

      <Container
        className="border my-3 p-5 col-md-6 mx-auto"
        style={{ boxShadow: "0 0 2px" }}
      >
        <h2 className="text-center mb-5 mt-0">Ürün Güncelle</h2>
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
            Kaydet
          </Button>
        </Form>
      </Container>
    </>
  )
}

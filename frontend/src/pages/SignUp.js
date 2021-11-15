import { useSelector, useDispatch } from "react-redux";
import { register } from "../store/authSlice";
import { Container, Form, Button, FloatingLabel } from "react-bootstrap";
import { useFormik } from "formik";
import validationSchema from "./validations/sign-up";

export default function SignUp() {
  const auth = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      try {
        if (values.password !== values.passwordConfirm) return;
        delete values.passwordConfirm;
        dispatch(register(values));
      } catch (e) {
        bag.setErrors({ general: e.response.data.message });
      }
    },
  });

  return (
    <>
      <Container>
        <Container
          className="border my-3 p-5 col-md-6 mx-auto"
          style={{ boxShadow: "0 0 2px" }}
        >
          <h2 className="text-center mb-5 mt-0">Kayıt Ol</h2>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <FloatingLabel
                controlId="formBasicEmail"
                label="Email address"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  isInvalid={formik.touched.email && formik.errors.email}
                  placeholder="name@example.com"
                />
              </FloatingLabel>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <FloatingLabel
                controlId="formBasicPassword"
                label="Parola"
                className="mb-3"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  isInvalid={formik.touched.password && formik.errors.password}
                  placeholder="password"
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="passwordConfirm">
              <FloatingLabel
                controlId="passwordConfirm"
                label="Parola (Tekrar)"
                className="mb-3"
              >
                <Form.Control
                  type="password"
                  name="passwordConfirm"
                  onChange={formik.handleChange}
                  value={formik.values.passwordConfirm}
                  isInvalid={
                    formik.touched.passwordConfirm &&
                    formik.errors.passwordConfirm
                  }
                  placeholder="password"
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
        <pre>
          <code>{auth && JSON.stringify(auth)}</code>
        </pre>
      </Container>
    </>
  );
}

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Formik } from "formik";
import { CreateUserDto } from "../../validations/auth.dto";
import createValidator from "../../../utils/class-validator-formik";
import useAuthSlice from "../../hooks/useAuthSlice";
import { Alert } from "@mui/material";

const initialValues: CreateUserDto = {
  name: "",
  email: "",
  password: "",
  repeatPassword: "",
};

const RegisterPage = () => {
  const validate = createValidator(CreateUserDto);

  const { startDeleteErrorAuth, startRegister, errorMessage } = useAuthSlice();

  const onSubmit = (values: CreateUserDto) => {
    startRegister(values);
  };
  const deleteErrorMessaje = () => {
    startDeleteErrorAuth();
  };

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registro
        </Typography>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          onSubmit={onSubmit}
          validate={validate}
        >
          {(formik) => (
            <Box sx={{ mt: 1, width: "100%" }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", width: "100%" }}
              >
                <TextField
                  autoFocus
                  margin="normal"
                  label="Name"
                  placeholder="Fernando Gomez"
                  name="name"
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  onChange={(e) => {
                    formik.handleChange(e);
                    deleteErrorMessaje();
                  }}
                />
                <TextField
                  margin="normal"
                  label="Email"
                  placeholder="johndoe@gmail.com"
                  name="email"
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  onChange={(e) => {
                    formik.handleChange(e);
                    deleteErrorMessaje();
                  }}
                />
                <TextField
                  margin="normal"
                  label="Contraseña"
                  name="password"
                  type="password"
                  placeholder="********"
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  onChange={(e) => {
                    formik.handleChange(e);
                    deleteErrorMessaje();
                  }}
                />
                <TextField
                  margin="normal"
                  label="Repetir Contraseña"
                  name="repeatPassword"
                  type="password"
                  placeholder="********"
                  value={formik.values.repeatPassword}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.repeatPassword &&
                    Boolean(formik.errors.repeatPassword)
                  }
                  helperText={
                    formik.touched.repeatPassword &&
                    formik.errors.repeatPassword
                  }
                  onChange={(e) => {
                    formik.handleChange(e);
                    deleteErrorMessaje();
                  }}
                />

                <Button
                  sx={{ mt: 3, mb: 2 }}
                  fullWidth
                  variant="contained"
                  type="submit"
                  onClick={() => formik.handleSubmit()}
                >
                  Registrarme
                </Button>
                {errorMessage && (
                  <Alert severity="error"> Credenciales incorrectas</Alert>
                )}
                {}
              </Box>
            </Box>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default RegisterPage;

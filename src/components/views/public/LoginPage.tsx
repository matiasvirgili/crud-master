import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Alert, CircularProgress } from "@mui/material";

import useAuthSlice from "../../hooks/useAuthSlice";
import { useMemo } from "react";
import createValidator from "../../../utils/class-validator-formik";
import { Formik } from "formik";
import { LoginDto } from "../../validations/auth.dto";
import { Elinks } from "../../routes/links";

const initialValues: LoginDto = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const validate = createValidator(LoginDto);

  const { startLogin, isLoading, status, errorMessage, startDeleteErrorAuth } =
    useAuthSlice();

  const onSubmit = (values: LoginDto) => {
    startLogin(values);
  };

  const isAuthenticating = useMemo(
    () => status === "checking" && isLoading === true,
    [status, isLoading]
  );

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
          Inicio de sesión
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
              </Box>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recordarme"
              />
              <Button
                sx={{ mt: 3, mb: 2 }}
                fullWidth
                variant="contained"
                type="submit"
                disabled={isAuthenticating}
                onClick={() => formik.handleSubmit()}
              >
                {isAuthenticating ? (
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CircularProgress size={24} sx={{ marginRight: 1 }} />
                    Cargando...
                  </Box>
                ) : (
                  "Ingresar"
                )}
              </Button>
              {errorMessage && (
                <Alert severity="error"> Credenciales incorrectas</Alert>
              )}
              <Grid container>
                <Grid item sx={{ mr: 1 }}>
                  <Link href="#" variant="body2">
                    Olvidaste tu Contraseña?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href={Elinks.register} variant="body2">
                    No tenés cuenta? Registrate
                  </Link>
                </Grid>
              </Grid>
            </Box>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default LoginPage;

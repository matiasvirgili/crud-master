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
import { CircularProgress } from "@mui/material";

import useAuthSlice from "../../hooks/useAuthSlice";
import { useMemo } from "react";
import createValidator from "../../../utils/class-validator-formik";
import { Formik } from "formik";
import { LoginDto } from "../../validations/auth.dto";

const initialValues: LoginDto = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const validate = createValidator(LoginDto);

  const { startCheckingCredentials, isLoading, status } = useAuthSlice();

  const handleStartCheckingCredentials = () => {
    startCheckingCredentials();
  };

  const onSubmit = () => {};

  const isAuthenticating = useMemo(
    () => status === "checking" && isLoading === true,
    [status, isLoading]
  );

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
          Sign in
        </Typography>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          onSubmit={onSubmit}
          validate={validate}
        >
          {(formik) => (
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                autoFocus
                label="Email"
                placeholder="johndoe@gmail.com"
                name="email"
                onBlur={formik.handleBlur}
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                label="Contraseña"
                name="password"
                type="password"
                placeholder="********"
                value={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                sx={{ mt: 3, mb: 2 }}
                fullWidth
                variant="contained"
                type="submit"
                onClick={handleStartCheckingCredentials}
                disabled={isAuthenticating}
              >
                {isAuthenticating ? (
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CircularProgress size={24} sx={{ marginRight: 1 }} />
                    Loading...
                  </Box>
                ) : (
                  "Sign In"
                )}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link variant="body2">Don't have an account? Sign Up</Link>
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

import { useForm, Controller } from "react-hook-form";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormHelperText from '@mui/material/FormHelperText';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Form = () => {
  const { register, handleSubmit, reset, control, setValue, formState: { errors } } = useForm();
  const onFormSubmit = (data) => {
    console.log(data);
    localStorage.setItem("data",JSON.stringify(data));
    reset();
  };
  localStorage.getItem("data");
  const handleChange = (e)=>{
    const upperCaseValued = e.target.value.toUpperCase();
    setValue("panNumber",upperCaseValued);
  }

  const onFormError = (error) => console.log(error);
  const defaultTheme = createTheme();

  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit(onFormSubmit, onFormError)} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    {...register('firstName', {
                      required: "First name is required",
                      pattern: {
                        value: /^[A-Za-z]+$/,
                        message: "First name should contain only letters"
                      }
                    })}
                    autoFocus
                    error={errors.firstName}
                  />
                  <FormHelperText error={errors.firstName}>
                    {errors?.firstName && errors.firstName.message}
                  </FormHelperText>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    {...register('lastName', {
                      required: "Last name is required",
                      pattern: {
                        value: /^[A-Za-z]+$/,
                        message: "Last name should contain only letters"
                      }
                    })}
                    autoComplete="family-name"
                    error={errors.lastName}
                  />
                  <FormHelperText error={errors.lastName}>
                    {errors?.lastName && errors.lastName.message}
                  </FormHelperText>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    {...register('email', {
                      required: "Email is required",
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email format"
                      }
                    })}
                    autoComplete="email"
                    error={errors.email}
                  />
                  <FormHelperText error={errors.email}>
                    {errors?.email && errors.email.message}
                  </FormHelperText>
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="phoneNumber"
                    control={control}
                    rules={{
                      required: "Phone number is required",
                      validate: (value) => {
                        const isValidPhoneNumber = /^\d+$/.test(value.replace(/\D/g, '')) && value.replace(/\D/g, '').length >= 10;
                        return isValidPhoneNumber || "Invalid phone number format";
                      }
                    }}
                    render={({ field: { onChange, value } }) => (
                      <PhoneInput
                        country={'us'}
                        value={value}
                        onChange={onChange}
                        inputStyle={{ width: '100%' }}
                        specialLabel="Phone Number"
                        error={errors.phoneNumber}
                      />
                    )}
                  // error={errors.phoneNumber}
                  />
                  <FormHelperText error={!!errors.phoneNumber}>
                    {errors?.phoneNumber && errors.phoneNumber.message}
                  </FormHelperText>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="panNumber"
                    label="PAN Number"
                    type="text"
                    id="pan"
                    {...register('panNumber', {
                      required: "PAN Number is required",
                      pattern: {
                        value: /^[A-Z]{5}\d{4}[A-Z]$/,
                        message: "Invalid PAN format. Example: ABCDE1234F"
                      }
                    })}
                    onChange={handleChange}
                    autoComplete="off"
                    error={errors.panNumber}
                  />
                  <FormHelperText error={errors.panNumber}>
                    {errors?.panNumber && errors.panNumber.message}
                  </FormHelperText>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    {...register('password', {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long"
                      }
                    })}
                    autoComplete="new-password"
                    error={errors.password}
                  />
                  <FormHelperText error={errors.password}>
                    {errors?.password && errors.password.message}
                  </FormHelperText>
                </Grid>
              </Grid>
              <Button type="submit" variant="contained" color="success" sx={{ mt: 3, mb: 2 }}>
                Submit
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default Form;

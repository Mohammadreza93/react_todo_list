import React from "react";
import {Box, Button, FormLabel,} from "@mui/material";
import * as yup from "yup";
import {Form, Formik} from "formik";
import Input from "./Common/Input.jsx";
import {AccountCircle, Email, Lock} from "@mui/icons-material";
import RadioButton from "./Common/RadioButton.jsx";
import SelectBox from "./Common/SelectBox.jsx";

const initialValues = {
    email: "", username: "", password: "", confirmPassword: '', gender: 'male', country: ''
}

const handleSubmit = (values, onSubmitProps) => {
    console.log(values);
    // call Backend services.
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
}

const genderValues = [{value: 'male', key: 'Male'}, {value: 'female', key: 'Female'}];

const schema = yup.object({
    email: yup.string().email("Invalid Email Address").required("Enter your email!"),
    username: yup.string().min(3, "Enter valid username").required("Required"),
    password: yup.string().min(8, "Password must be at least 8 characters.").required("Required!"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), ''], 'Password must be match').required('Confirm your password'),
    gender: yup.string(),
});

const country = [
    {value: 'af', key: 'Afghanistan'},
    {value: 'ir', key: 'Iran'},
    {value: 'pk', key: 'Pakistan'},
    {value: 'ch', key: 'China'},
]
const SignUp = () => {
    return (
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", py: 3}}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
                {
                    formik => {
                        return (
                            <Form style={{maxWidth: 500, width: '100%',padding:5}}>
                                <FormLabel sx={{fontSize: 30}}>Sign Up</FormLabel>
                                <Input fastField name={'username'} type={'text'} label={'Username'}
                                       icon={<AccountCircle/>}/>
                                <Input fastField name={'email'} type={'email'} label={'Email'} icon={<Email/>}/>
                                <Input name={'password'} type={'password'} label={'Password'} icon={<Lock/>}/>
                                <Input name={'confirmPassword'} type={'password'} label={'ConfirmPassword'}
                                       icon={<Lock/>}/>
                                <RadioButton name={'gender'} label={'Gender'} row options={genderValues}/>
                                <SelectBox options={country} name={'country'} label={'Country'}/>
                                <Button sx={{my: 1}}
                                        variant={'contained'} type={'submit'}>Sign Up</Button>
                            </Form>
                        )
                    }
                }
            </Formik>
        </Box>
    );
};

export default SignUp;

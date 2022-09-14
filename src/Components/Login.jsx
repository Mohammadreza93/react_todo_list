import React, {useEffect, useState} from 'react';
import {Form, Formik} from 'formik'
import {Box, Button, Divider, IconButton, Tooltip, Typography} from "@mui/material";
import Input from "./Common/Input.jsx";
import {AccountCircle, Email, FacebookOutlined, GitHub, Google, Lock} from "@mui/icons-material";
import * as yup from 'yup'
import {useSetRecoilState} from 'recoil'
import {User} from '../Atom.js'
import {useNavigate} from "react-router-dom";
import axios from 'axios'

const values = {
    email: '',
    username: '',
    password: ''
}

const endPoint = 'http://localhost:4000'

const addUser = async (user) => {
    return await axios.post(`${endPoint}/customUsers`, user);
}

const Users = async () => {
    return await axios.get(`${endPoint}/customUsers`);
}

const removeUser = async (user) => {
    await axios.delete(`${endPoint}/customUsers`);
}


const schema = yup.object({
    email: yup.string().email('Invalid Email').required('Enter your email'),
    username: yup.string().required('Required!'),
    password: yup.string().min(8, 'Password must be at least 8 characters').required('Enter your password')
})

const Login = () => {
    const setValue = useSetRecoilState(User);
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [userExist, setUserExist] = useState('');

    useEffect(() => {
        Users().then(res => setData(res.data)).catch(er => setError(er.message))
    }, [])

    const handleSubmit = (values, props) => {
        setValue(values);
        navigate('/');
        (!data?.some((val) => val.username === values.username)) ? addUser(values).then(res => {
            console.log(res.data)
        }).catch(er => {
            console.log(er.message)
        }) : setUserExist(`Username ${values.username} is exist`)
        props.setSubmitting(true);
        props.resetForm();
    }

    return (
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", py: 4}}>
            <Formik initialValues={values} onSubmit={handleSubmit} validationSchema={schema}>
                {
                    formik => {
                        return (
                            <Form style={{
                                maxWidth: 500,
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                padding: 5
                            }}>
                                <Typography variant="h4">Log In</Typography>
                                <Input name={'username'} icon={<AccountCircle/>}/>
                                <Input name={'email'} type={'email'} icon={<Email/>}/>
                                <Input name={'password'} type={'password'} icon={<Lock/>}/>
                                <Button
                                    variant="contained" type="submit" sx={{my: 1}}>
                                    Log In
                                </Button>
                                <Button sx={{my: 1}}>Forget password?</Button>

                                <Divider sx={{my: {xs: 2, md: 3}}}/>
                                <Typography sx={{alignSelf: 'center'}} variant={'body2'}>Sign In With:</Typography>
                                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                                    <Tooltip title={'Facebook'}><IconButton
                                        size={'large'}><FacebookOutlined/></IconButton></Tooltip>
                                    <Tooltip title={'Google'}><IconButton
                                        size={'large'}><Google/></IconButton></Tooltip>
                                    <Tooltip title={'Github'}><IconButton
                                        size={'large'}><GitHub/></IconButton></Tooltip>
                                </Box>
                            </Form>
                        )
                    }
                }
            </Formik>
        </Box>
    );
};

export default Login;
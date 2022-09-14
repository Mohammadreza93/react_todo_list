import React from 'react';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, Stack,
    TextField
} from "@mui/material";
import {Formik, Form} from 'formik'
import Input from "./Common/Input.jsx";
import RadioButton from "./Common/RadioButton";

const values = {
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    gender: ''
}

const genderOptions = [{key: 'Male', value: 'male'}, {key: 'Female', value: 'female'}];

const AddUserDialogBox = ({open, handleClose}) => {

    const handleSubmit = (values, props) => {

    }
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add New User</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Fill all text field to add new user in database.
                </DialogContentText>
                <Formik initialValues={values} onSubmit={handleSubmit}>
                    <Form>
                        <Input name={'name'} size={'small'}/>
                        <Input name={'username'} size={'small'}/>
                        <Input name={'email'} type={'email'} size={'small'}/>
                        <Input name={'phone'} size={'small'}/>
                        <Input name={'website'} size={'small'}/>
                        <RadioButton options={genderOptions} label={'Gender'} row name={'gender'}/>
                        <Stack spacing={1} direction={'row'} justifyContent={'center'}>
                            <Button type={'submit'} variant={'contained'}>Add</Button>
                            <Button type={'reset'} variant={'contained'}>Clear</Button>
                        </Stack>
                    </Form>
                </Formik>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddUserDialogBox;
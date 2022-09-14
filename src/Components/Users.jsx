import React, {useEffect, useState} from 'react';
import {
    Box, Button,
    FormControl,
    IconButton,
    InputLabel,
    MenuItem,
    Pagination,
    Select,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import Table from "./Common/Table.jsx";
import axios from "axios";
import {Search} from "@mui/icons-material";
import AddUserDialogBox from "./AddUserDialogBox.jsx";

const endPoint = 'http://localhost:4000';

const fetchUsers = async pageNumber => {
    return await axios.get(`${endPoint}/users?_limit=4&_page=${pageNumber}`)
}

const columns = ['Name', 'Email', 'Phone', 'Website'];
const fieldNames = ['name', 'email', 'phone', 'website'];

const Users = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [search, setSearch] = useState('');
    const [sortValue, setSortValue] = useState('');
    const [open, setOpen] = useState(false);

    //  sideEffect
    useEffect(() => {
        fetchUsers(pageNumber).then(res => {
            setData(res.data)
        }).catch(er => setError(er.message))
    }, [pageNumber])

    const handleChangePagination = (e, value) => {
        setPageNumber(value)
    }

    const handleSort = async (e) => {
        const value = e.target.value;
        setSortValue(value)
        await axios.get(`${endPoint}/users?_sort=${value}&_order=asc`).then(res => setData(res.data)).catch(er => setError(er.message))
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        await axios.get(`${endPoint}/users?q=${search}`).then(res => {
            search && setData(res.data);
            setSearch('')
        }).catch(er => setError(er.message))
    }

    if (error) return <Typography sx={{p: 2}} variant={'h4'}>{error}</Typography>
    return (
        <Box sx={{p: 2}}>
            <form style={{display: 'flex', justifyContent: 'center'}} onSubmit={handleSearch}>
                <FormControl fullWidth sx={{maxWidth: 300}}>
                    <TextField type={'search'} color={'secondary'} label={'Search...'} value={search}
                               onChange={({target}) => setSearch(target.value)}
                               size={'small'}
                    />
                </FormControl>
                <IconButton type={'submit'} edge={'end'}><Search/></IconButton>
            </form>

            <Button onClick={() => setOpen(true)} variant={'contained'}>Add New User</Button>
            <AddUserDialogBox open={open} handleClose={() => setOpen(false)}/>

            <Table nameOfFieldToMap={fieldNames} columnsName={columns} data={data}/>

            {
                data?.length !== 0 ? <>
                        <Pagination sx={{my: 1}} page={pageNumber} onChange={handleChangePagination} count={3}/>
                        <Stack sx={{p: 1}}>
                            <Typography>Sort By:</Typography>
                            <FormControl fullWidth sx={{maxWidth: 300}} size={'small'}>
                                <InputLabel>Select column to sort</InputLabel>
                                <Select value={sortValue} onChange={handleSort} label={'Select column to sort'}>
                                    {
                                        columns?.map(option =>
                                            <MenuItem key={option} value={option.toLowerCase()}>{option}</MenuItem>)
                                    }
                                </Select>
                            </FormControl>
                        </Stack>
                    </>
                    : <Typography sx={{p: 2}} variant={'h5'}>No Data</Typography>
            }
        </Box>
    );
};

export default Users;
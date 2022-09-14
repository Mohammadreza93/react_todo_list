import React from 'react';
import propTypes from 'prop-types'
import {Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";

const Table = ({data, columnsName, nameOfFieldToMap}) => {
    return (
        <TableContainer>
            <MuiTable>
                <TableHead>
                    <TableRow>
                        {
                            columnsName?.map((col, i) => <TableCell key={i}>{col}</TableCell>)
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data?.map((d, i) => <TableRow key={i}>
                            {
                                nameOfFieldToMap.map((option, i) => <TableCell key={i}>{d?.[option]}</TableCell>)
                            }
                        </TableRow>)
                    }
                </TableBody>
            </MuiTable>
        </TableContainer>
    );
};

Table.propTypes = {
    data: propTypes.array.isRequired,
    columnsName: propTypes.array.isRequired,
    nameOfFieldToMap: propTypes.array.isRequired
}

Table.defaultProps = {
    data: [],
    columnsName: [],
    nameOfFieldToMap: []
}

export default Table;
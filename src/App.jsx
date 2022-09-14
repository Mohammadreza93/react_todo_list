import React from 'react';
import Index from './Components/index.jsx'
import {ThemeProvider, createTheme, CssBaseline} from "@mui/material";
import {useRecoilValue} from "recoil";
import {Mode} from './Atom.js'

const App = () => {
    const mode = useRecoilValue(Mode)
    const theme = createTheme({
        palette: {
            mode
        }
    })
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Index/>
        </ThemeProvider>
    );
};

export default App;
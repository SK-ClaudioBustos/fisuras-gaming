'use client'

import { createTheme } from "@mui/material";
import { color2 } from "./colors";

const theme = createTheme({
    palette: {
        primary: {
            main: color2,
            light: color2,
            dark: color2,
            contrastText: color2,
        },
    },
});

export default theme;
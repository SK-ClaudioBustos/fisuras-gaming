import { Box, Typography } from "@mui/material"

const PresentionBox = () => {
    return (
        <Box margin={"4rem 0 6rem 0"} padding={"3rem"} display={"flex"} flexDirection={"column"}>
            <Typography fontSize={"6vw"}>
                Bienvenidos a la pagina oficial de Fisuras Gaming
            </Typography>
            <Typography fontSize={"1vw"}>
                El mejor servidor de Counter Strike 1.6 en Argentina
            </Typography>
        </Box>
    )
}

export default PresentionBox
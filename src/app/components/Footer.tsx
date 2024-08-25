import { Box, Typography } from "@mui/material"
import { color2, color6 } from "../styles/colors"
import SocialMediaBox from "./SocialMediaBox"

const footerStyles = {
    backgroundColor: color6,
    textAlign: "end",
    padding: "10px",
    borderTop: `1px solid ${color2}`
}

const Footer = () => {
    return (
        <Box sx={footerStyles}>
            <SocialMediaBox />
            <Typography fontSize={"0.9rem"} marginRight={"1.5vw"}>
                paginá creada por -SK-
            </Typography>
        </Box>
    )
}

export default Footer
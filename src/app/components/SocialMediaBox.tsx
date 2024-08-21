import { Box, Typography } from "@mui/material"
import SocialMediaData, { SocialMediaDataI } from "../data/socialMediaData"
import CircularBox from "./CircularBox"

const SocialMediaBox = () => {
    return (
        <Box sx={{ marginY: "10vw" }}>
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: "center", marginBottom: "1rem" }}>
                <Typography fontSize={"3vw"}>
                    Redes Sociales
                </Typography>
                <Typography fontSize={"2vw"}>
                    Aquí encontraras nuestras redes sociales
                </Typography>
            </Box>
            {
                SocialMediaData.map((socialMedia: SocialMediaDataI, key) => (
                    <CircularBox
                        key={key}
                        {...socialMedia}
                    />
                ))
            }
        </Box>
    )
}

export default SocialMediaBox
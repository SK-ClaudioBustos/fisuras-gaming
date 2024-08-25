import { Box, IconButton } from "@mui/material"
import SocialMediaData, { SocialMediaDataI } from "../data/socialMediaData"

const SocialMediaBox = () => {
    return (
        <Box sx={{ marginY: "auto" }}>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                {
                    SocialMediaData.map((socialMedia: SocialMediaDataI, key) => (
                        <IconButton href={socialMedia.link} target="_blank" key={key} color="primary" aria-label={`icono de ${socialMedia.label}`}>
                            {socialMedia.icon}
                        </IconButton>
                    ))
                }
            </Box>
        </Box>
    )
}

export default SocialMediaBox
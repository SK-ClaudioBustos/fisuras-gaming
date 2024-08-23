import { Box, IconButton } from "@mui/material"
import SocialMediaData, { SocialMediaDataI } from "../data/socialMediaData"

const SocialMediaBox = () => {
    return (
        <Box sx={{ marginY: "auto" }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                {
                    SocialMediaData.map((socialMedia: SocialMediaDataI, key) => (
                        <IconButton href={socialMedia.link} key={key} color="primary"  aria-label="red social">
                            {socialMedia.icon}
                        </IconButton>
                    ))
                }
            </Box>
        </Box>
    )
}

export default SocialMediaBox
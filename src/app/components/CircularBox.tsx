import { Box, Link, Typography } from "@mui/material";
import { SocialMediaDataI } from "../data/socialMediaData";


const CircularBox = (props: SocialMediaDataI) => {
    const { description, icon, primaryColor, link } = props;
    const circularBoxStyles = {
        marginY: "3vh",
        background: primaryColor,
        borderRadius: "80px",
        padding: "2.5rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        "&:hover": {
            cursor: "pointer"
        }
    };

    return (
        <Link href={link} target={"_blank"} sx={{ textDecoration: "none", color: "#fff" }}>
            <Box sx={circularBoxStyles}>
                <Box>
                    {icon}
                </Box>
                <Box sx={{ marginLeft: "10px", display: "flex", alignItems: "center" }}>
                    <Typography fontSize={"1.5rem"}>
                        {description}
                    </Typography>
                </Box>
            </Box>
        </Link>
    )
}

export default CircularBox;
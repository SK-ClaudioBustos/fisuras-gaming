import { Box, Typography } from "@mui/material";

interface CircularBoxProps {
    icon: JSX.Element,
    description: string
    primaryColor: string
}

const CircularBox = (props: CircularBoxProps) => {
    const { description, icon, primaryColor } = props;
    return (
        <Box sx={{ marginY: "3vh", background: primaryColor, borderRadius: "80px", padding: "2.5rem", display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
            <Box>
                {icon}
            </Box>
            <Box sx={{ marginLeft: "10px", display: "flex", alignItems: "center" }}>
                <Typography fontSize={"1.5rem"}>
                    {description}
                </Typography>
            </Box>
        </Box>
    )
}

export default CircularBox;
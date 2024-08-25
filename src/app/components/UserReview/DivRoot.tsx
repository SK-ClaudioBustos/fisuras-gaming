import { styled } from "@mui/material";

const DivRoot = styled("div")(({ theme: { breakpoints } }) => ({
    width: "30%",
    transition: "0.3s",
    position: "relative",
    [breakpoints.down("sm")]: {
        width: "90%"
    }
}));

export default DivRoot;
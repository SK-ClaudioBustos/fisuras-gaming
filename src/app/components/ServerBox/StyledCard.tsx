import { color4 } from "@/app/styles/colors";
import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme: { breakpoints } }) => ({
    width: "45%",
    margin: "auto",
    borderRadius: "0px",
    transition: "0.3s",
    position: "relative",
    overflow: "initial",
    boxShadow: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    paddingLeft: 8,
    paddingRight: 8,
    background: color4,
    fontSize: "2vw",
    [breakpoints.down("md")]: {
        width: "50%"
    },
    [breakpoints.down("sm")]: {
        width: "60%"
    }
}));

export default StyledCard;
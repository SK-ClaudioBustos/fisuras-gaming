import { color1 } from "@/app/styles/colors";
import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme: { breakpoints, spacing } }) => ({
    width: "40%",
    margin: "auto",
    borderRadius: spacing(2),
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
    background: color1,
    [breakpoints.up("sm")]: {
        textAlign: "left",
        flexDirection: "row-reverse",
    },
}));

export default StyledCard;
import { color4 } from "@/app/styles/colors";
import { styled } from "@mui/material";

const ColumnCard = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    zIndex: 1,
    position: "relative",
    borderRadius: "0px",
    backgroundColor: color4,
    transition: "0.4s",
    height: "100%",
    padding: "1vw"
}));

export default ColumnCard;
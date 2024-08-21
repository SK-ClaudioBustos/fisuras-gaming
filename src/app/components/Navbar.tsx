import { Box, Typography } from "@mui/material"
import { color2, color6 } from "../styles/colors"

const navbarStyles = {
  padding: "0.5rem",
  textAlign: "center",
  backgroundColor: color6,
  borderBottom: `1px solid ${color2}`
}

const Navbar = () => {

  return (
    <Box sx={navbarStyles}>
      <Typography fontSize={"3vw"} display={"inline-block"}>
        Fisuras Gaming
      </Typography>
    </Box>
  )
}

export default Navbar
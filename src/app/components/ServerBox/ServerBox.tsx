import { Box, Button, Slide, SlideProps, Snackbar } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import StyledCard from "./StyledCard";
import TypographyHeading from "./TypographyHeading";
import TypographyOverline from "./TypographyOverline";

function SlideTransition(props: SlideProps) {
    return <Slide {...props} direction="up" />;
}

const boxStyles = {
    display: "flex",
    wrap: "no-wrap",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "1rem"
}

export default function ServerBox() {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(true);
    }
    return (
        <Box sx={boxStyles}>
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: "center", marginBottom: "1rem" }}>
                <Typography fontSize={"3vw"}>
                    Querés divertirte? Vení juga en nuestros servidores
                </Typography>
                <Typography fontSize={"2vw"}>
                    Por el momento contamos con solo un servidor, somos una comunidad modesta y apenas estamos empezando
                </Typography>
            </Box>
            <StyledCard>
                <CardContent sx={{ margin: "auto", padding: "auto" }}>
                    <TypographyOverline>
                        Unete a nuestro servidor con la siguiente IP
                    </TypographyOverline>
                    <TypographyHeading gutterBottom>
                        #01 PUBLICO ➡️
                        <Button sx={{fontSize: "1.8vw"}} onClick={handleClick}>45.235.98.68:27048</Button>
                        <Snackbar
                            TransitionComponent={SlideTransition}
                            open={open}
                            autoHideDuration={2000}
                            message="IP copiada"
                            onClose={() => setOpen(false)}
                            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                        />
                    </TypographyHeading>
                </CardContent>
            </StyledCard>
        </Box>
    );
}
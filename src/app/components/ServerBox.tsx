import { Box, Button, Slide, SlideProps, Snackbar } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const StyledCard = styled(Card)(({ theme: { breakpoints, spacing } }) => ({
    width: "40%",
    margin: "auto",
    borderRadius: spacing(2),
    transition: "0.3s",
    position: "relative",
    overflow: "initial",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    paddingLeft: 8,
    paddingRight: 8,
    background: "#545677",
    [breakpoints.up("sm")]: {
        textAlign: "left",
        flexDirection: "row-reverse",
    },
}));

const TypographyOverline = styled(Typography)(({ }) => ({
    lineHeight: 2,
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: "1.2",
    margin: "0"
}));

const TypographyHeading = styled(Typography)(({ }) => ({
    fontWeight: 900,
    color: "#ffffff",
    letterSpacing: 0.5,
    margin: "0"
}));

function SlideTransition(props: SlideProps) {
    return <Slide {...props} direction="up" />;
}

export default function ServerBox() {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(true);
    }
    return (
        <Box sx={{display: "flex", wrap: "no-wrap", flexDirection: "column", justifyContent: "center"}}>
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: "center", marginBottom: "1rem" }}>
                <Typography fontSize={"3vw"}>
                    Queres divertirte?
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
                        <Button color="primary" onClick={handleClick}>45.235.98.68:27048</Button>
                        <Snackbar
                            TransitionComponent={SlideTransition}
                            open={open}
                            autoHideDuration={2000}
                            message="IP copiada en el portapapeles"
                            onClose={() => setOpen(false)}
                            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                        />
                    </TypographyHeading>
                </CardContent>
            </StyledCard>
        </Box>
    );
}
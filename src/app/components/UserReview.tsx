import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { color2, color4 } from "../styles/colors";

const DivRoot = styled("div")(({ theme: { breakpoints } }) => ({
    width: "30%",
    transition: "0.3s",
    position: "relative",
    [breakpoints.down("sm")]: {
        width: "90%"
    }
}));

const ColumnCard = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    zIndex: 1,
    position: "relative",
    borderRadius: "1rem",
    backgroundColor: color4,
    transition: "0.4s",
    height: "100%",
    padding: "1vw"
}));

const AvatarLogo = styled(Avatar)(() => ({
    width: "5.5vw",
    height: "5.5vw",
    borderRadius: "50%",
}));

interface PropsUserReview {
    title: string;
    subtitle: string;
    description: React.ReactNode;
    thumbnail: string;
}

export const UserReview = (props: PropsUserReview) => {
    const {
        title,
        subtitle,
        description,
        thumbnail,
    } = props;
    return (
        <DivRoot>
            <ColumnCard>
                <Box display="flex" p={2} gap={2} flexWrap="nowrap">
                    <AvatarLogo variant={"rounded"} src={thumbnail} />
                    <Box>
                        <Typography fontSize={"1.5vw"} sx={{ color: "gold" }}>
                            {title}
                        </Typography>
                        <Typography fontSize={"1.5vw"} sx={{ color: "#c1c1c1" }}>
                            {subtitle}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    pb={1}
                    px={2}
                    color={color2}
                    fontSize={"1.5vw"}
                    flexGrow={1}
                >
                    {description}
                </Box>
            </ColumnCard>
        </DivRoot>
    );
}

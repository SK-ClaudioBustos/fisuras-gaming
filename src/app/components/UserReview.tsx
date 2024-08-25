import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { color2 } from "../styles/colors";
import AvatarLogo from "./UserReview/AvatarLogo";
import ColumnCard from "./UserReview/ColumnCard";
import DivRoot from "./UserReview/DivRoot";

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

"use client"
import { Box } from "@mui/material";
import CircularBox from "./components/CircularBox";
import TablePlayerScore from './components/TablePlayerScore';
import UsersReviewsGallery from "./components/UsersReviewsGallery";
import SocialMediaData from "./data/socialMediaData";
import ServerBox from "./components/ServerBox";

export default function Home() {
  return (
    <Box sx={{ paddingY: "2rem" }}>
      <ServerBox />
      <UsersReviewsGallery />
      <TablePlayerScore />
      {
        SocialMediaData.map((socialMedia, key) => (
          <CircularBox
            key={key}
            icon={socialMedia.icon}
            primaryColor={socialMedia.primaryColor}
            description={socialMedia.description}
          />
        ))
      }
    </Box>
  );
}

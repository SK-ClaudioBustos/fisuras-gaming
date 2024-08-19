"use client"
import { Box } from "@mui/material";
import CircularBox from "./components/CircularBox";
import TablePlayerScore from './components/TablePlayerScore';
import SocialMediaData from "./data/socialMediaData";
import UsersReviewsGallery from "./components/UsersReviewsGallery";

export default function Home() {
  return (
    <Box sx={{ paddingY: "2rem" }}>
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

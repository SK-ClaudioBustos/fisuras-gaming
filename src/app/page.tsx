"use client"
import { Box } from "@mui/material";
import CircularBox from "./components/CircularBox";
import ServerBox from "./components/ServerBox";
import TablePlayerScore from './components/TablePlayerScore';
import UsersReviewsGallery from "./components/UsersReviewsGallery";
import SocialMediaData, { SocialMediaDataI } from "./data/socialMediaData";

export default function Home() {
  return (
    <Box sx={{ paddingY: "2rem" }}>
      <ServerBox />
      <UsersReviewsGallery />
      <TablePlayerScore />
      {
        SocialMediaData.map((socialMedia: SocialMediaDataI, key) => (
          <CircularBox
            key={key}
            {...socialMedia}
          />
        ))
      }
    </Box>
  );
}

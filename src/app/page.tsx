"use client"
import { Box } from "@mui/material";
import ServerBox from "./components/ServerBox/ServerBox";
import TablePlayerScore from './components/TablePlayerScore';
import UsersReviewsGallery from "./components/UsersReviewsGallery";
import SocialMediaBox from "./components/SocialMediaBox";

export default function Home() {
  return (
    <Box sx={{ paddingY: "2rem" }}>
      <ServerBox />
      <TablePlayerScore />
      <SocialMediaBox/>
      <UsersReviewsGallery />
    </Box>
  );
}

import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DiscordIcon from '../icons/DiscordIcon';

export interface SocialMediaDataI {
    icon: JSX.Element;
    primaryColor: string;
    link: string;
}

const SocialMediaData: SocialMediaDataI[] = [
    {
        icon: <WhatsAppIcon sx={{ fontSize: "2vw" }} />,
        primaryColor: "#1BFA8C",
        link: ""
    },
    {
        icon: <InstagramIcon sx={{ fontSize: "2vw" }} />,
        primaryColor: "linear-gradient(41deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 48%, rgba(252,176,69,1) 100%)",
        link: "https://www.instagram.com/fisurasgaming?igsh=YzAwMG9iYWE3YzRn"

    },
    {
        icon: <DiscordIcon width={"2vw"} height={"2vw"} style={{ filter: "brightness(0%) invert(100%)" }} />,
        primaryColor: "#0F3BAC",
        link: "https://discord.gg/Zq4NMp72ka"
    }
];

export default SocialMediaData;
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DiscordIcon from '../icons/DiscordIcon';

export interface SocialMediaDataI {
    icon: JSX.Element;
    link: string;
    label: string;
}

const SocialMediaData: SocialMediaDataI[] = [
    {
        icon: <WhatsAppIcon sx={{ fontSize: "2vw" }} />,
        link: "https://chat.whatsapp.com/LEFsktR9tHp5jgrserHc5f",
        label: "whatsapp"
    },
    {
        icon: <InstagramIcon sx={{ fontSize: "2vw" }} />,
        link: "https://www.instagram.com/fisurasgaming?igsh=YzAwMG9iYWE3YzRn",
        label: "instagram"

    },
    {
        icon: <DiscordIcon width={"2vw"} height={"2vw"} style={{ filter: "brightness(0%) invert(100%)" }} />,
        link: "https://discord.gg/Zq4NMp72ka",
        label: "discord"
    }
];

export default SocialMediaData;
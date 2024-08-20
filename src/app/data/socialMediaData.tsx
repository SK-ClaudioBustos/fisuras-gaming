import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DiscordIcon from '../icons/DiscordIcon';

export interface SocialMediaDataI {
    icon: JSX.Element;
    description: string;
    primaryColor: string;
    link: string;
}

const SocialMediaData: SocialMediaDataI[] = [
    {
        icon: <WhatsAppIcon sx={{ fontSize: "5.5vw" }} />,
        description: "Unete a nuestro grupo de Whatsapp para mantenerte comunicado con la comunidad del servidor y poder compartir momentos especiales con los jugadores más veteranos",
        primaryColor: "#1BFA8C",
        link: ""
    },
    {
        icon: <InstagramIcon sx={{ fontSize: "5.5vw" }} />,
        description: "Siguenos en nuestra cuenta de instagram donde podras estar atento a cualquier evento que haga la comunidad, participar de torneos, ver los mejores jugadores del mes y mucho más!",
        primaryColor: "linear-gradient(41deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 48%, rgba(252,176,69,1) 100%)",
        link: "https://www.instagram.com/fisurasgaming?igsh=YzAwMG9iYWE3YzRn"

    },
    {
        icon: <DiscordIcon width={"5.5vw"} height={"5.5vw"} />,
        description: "Entra a nuestro servidor de discord, donde podras compartir momentos con los jugadores mas fieles de nuestra comunidad",
        primaryColor: "#0F3BAC",
        link: "https://discord.gg/Zq4NMp72ka"
    }
];

export default SocialMediaData;
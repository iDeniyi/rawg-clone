import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { Icon, HStack } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
    platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [kay: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        nintendo: SiNintendo,
        globe: BsGlobe,
    };
    return (
        <HStack marginY={1}>
            {platforms.map((platform) => (
                <Icon
                    as={iconMap[platform.slug]}
                    color="gray.500"
                    key={platform.slug}
                />
            ))}
        </HStack>
    );
};

export default PlatformIconList;

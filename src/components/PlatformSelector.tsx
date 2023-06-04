import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatofrms from "../hooks/usePlatforms";
import { Platform } from "../hooks/usePlatforms";

interface Props {
    selectedPlatform: Platform | null;
    onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
    const { data } = usePlatofrms();
    console.log(data);
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform ? selectedPlatform.name : "Platforms"}
            </MenuButton>
            <MenuList>
                {data.map((platform) => (
                    <MenuItem
                        key={platform.id}
                        onClick={() => onSelectPlatform(platform)}
                    >
                        {platform.name}{" "}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;

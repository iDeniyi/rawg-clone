import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatofrms from "../hooks/usePlatforms";

const PlatformSelector = () => {
    const { data } = usePlatofrms();
    console.log(data);
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Platforms
            </MenuButton>
            <MenuList>
                {data.map((platform) => (
                    <MenuItem key={platform.id}>{platform.name} </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;

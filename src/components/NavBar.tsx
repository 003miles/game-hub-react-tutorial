import { AspectRatio, HStack, Image } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.webp";
import useGameQueryStore from "../store";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const navigate = useNavigate();
  const reset = useGameQueryStore((s) => s.reset)

  return (
    <HStack padding="10px">
      <Image
        onClick={() => {
          reset();
          navigate("/");
        }}
        src={logo}
        boxSize="60px"
        objectFit="cover"
      />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

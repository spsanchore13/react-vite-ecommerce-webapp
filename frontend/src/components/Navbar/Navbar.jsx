import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import { CircleUser, ShoppingCart } from "lucide";
import { Link } from "react-router-dom";
import { SearchIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Box>
      <Stack p={1}>
        <Flex justify="space-between">
          <Image
            boxSize="50px"
            src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg"
            alt="logo"
          />

          <HStack gap={4}>
            <Link to="/">Shop</Link>
            <Link to="/">On Sale</Link>
            <Link to="/">New Arrivals</Link>
            <Link to="/">Brands</Link>
          </HStack>

          <HStack w="40%">
            <InputGroup>
              <InputLeftElement pointerEvents={"none"}>
                <SearchIcon />
              </InputLeftElement>
              <Input rounded={"full"} placeholder="Search for products.." />
            </InputGroup>
          </HStack>

          <HStack gap={5}>
            <SunIcon />
            <SunIcon />
          </HStack>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Navbar;

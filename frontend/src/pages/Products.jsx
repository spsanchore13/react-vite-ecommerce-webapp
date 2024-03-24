import React from "react";
import SidebarFilter from "../components/Products/SidebarFilter";
import { Box, Flex, Heading } from "@chakra-ui/react";

const Products = () => {
  return (
    <Box border={"1px solid red"} p={5} h="2000px">
      <Flex gap={10}>
        <Box
          w={"20%"}
          boxShadow={"rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"}
          p={2}
          rounded={"md"}
        >
          <SidebarFilter />
        </Box>
        <Box>
          <Heading>Map Products</Heading>
        </Box>
      </Flex>
    </Box>
  );
};

export default Products;

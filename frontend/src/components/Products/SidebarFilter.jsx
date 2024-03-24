import { Flex, Text, VStack } from "@chakra-ui/react";

const SidebarFilter = () => {
  return (
    <VStack>
      <Flex w="100%" justify={"space-between"}>
        <Text>Filters</Text>
        <Text>Filter icon</Text>
      </Flex>
    </VStack>
  );
};

export default SidebarFilter;

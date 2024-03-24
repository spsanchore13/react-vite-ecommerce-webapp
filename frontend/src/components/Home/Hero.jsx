import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box h="auto" w="100%" bgColor={"#f2f0f1"} position={"relative"}>
      <Stack direction={["column", "row"]} p={10} gap={"5%"}>
        <Flex
          flexDirection={"column"}
          align={"start"}
          w={["100%", "60%"]}
          rowGap={2}
        >
          <Heading
            textTransform={"uppercase"}
            maxW={"70%"}
            fontWeight={"extrabold"}
            fontSize={"6xl"}
          >
            find clothes that matches your style
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam et
            rerum iste dicta assumenda repellat commodi esse voluptatum velit
            aliquid voluptatibus beatae ex debitis, laudantium soluta, labore at
            sequi? Incidunt.
          </Text>

          <Button
            bgColor={"#171719"}
            _hover={{ backgroundColor: "#2f2d2e" }}
            color={"white"}
            px={"100px"}
            rounded={"full"}
            mt={2}
          >
            Shop Now
          </Button>

          <Flex w={"100%"} justify={"space-between"} mt={3}>
            <VStack align={"start"}>
              <Text fontWeight={"bold"} fontSize={"4xl"}>
                200+
              </Text>
              <Text>International Brands</Text>
            </VStack>
            <Divider orientation="vertical" borderColor={"gray"} />
            <VStack align={"start"}>
              <Text fontWeight={"bold"} fontSize={"4xl"}>
                2,000+
              </Text>
              <Text>High-Quality Products</Text>
            </VStack>
            <Divider orientation="vertical" borderColor={"gray"} />
            <VStack align={"start"}>
              <Text fontWeight={"bold"} fontSize={"4xl"}>
                30,000+
              </Text>
              <Text>Happy Customers</Text>
            </VStack>
          </Flex>
        </Flex>

        <Image src="https://i.imgur.com/oKOjMZz.png" alt="hero_image" />
      </Stack>
    </Box>
  );
};

export default Hero;

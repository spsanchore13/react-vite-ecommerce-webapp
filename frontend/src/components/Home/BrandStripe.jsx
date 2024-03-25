import { Box, Flex, Image } from "@chakra-ui/react";

const BrandStripe = () => {
  return (
    <Box px={5} py={2} bgColor={"#dbd9d9"} maxW={"100vw"}>
      <Flex justify={"space-evenly"}>
        <Image
          boxSize={"80px"}
          src="https://i.imgur.com/E5gtCn5.png"
          alt="brand-logo"
        />
        <Image
          boxSize={"80px"}
          src="https://i.imgur.com/ZAEfctK.png"
          alt="brand-logo"
        />
        <Image
          boxSize={"80px"}
          src="https://i.imgur.com/qdGdFtk.png"
          alt="brand-logo"
        />
        <Image
          boxSize={"80px"}
          src="https://i.imgur.com/nwOKXq2.png"
          alt="brand-logo"
        />
      </Flex>
    </Box>
  );
};

export default BrandStripe;

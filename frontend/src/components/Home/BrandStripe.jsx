import { Box, Flex, Image } from "@chakra-ui/react";

const BrandStripe = () => {
  return (
    <Box>
      <Flex justify={"space-between"}>
        <Image
          boxSize={"100px"}
          src="https://i.imgur.com/E5gtCn5.png"
          alt="brand-logo"
        />
        <Image
          boxSize={"100px"}
          src="https://i.imgur.com/ZAEfctK.png"
          alt="brand-logo"
        />
        <Image
          boxSize={"100px"}
          src="https://i.imgur.com/qdGdFtk.png"
          alt="brand-logo"
        />
        <Image
          boxSize={"100px"}
          src="https://i.imgur.com/nwOKXq2.png"
          alt="brand-logo"
        />
      </Flex>
    </Box>
  );
};

export default BrandStripe;

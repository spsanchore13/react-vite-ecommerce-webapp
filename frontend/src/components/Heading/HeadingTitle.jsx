import { Heading } from "@chakra-ui/react";

const HeadingTitle = ({ title }) => {
  return (
    <Heading textAlign={"center"} py={4}>
      {title}
    </Heading>
  );
};

export default HeadingTitle;

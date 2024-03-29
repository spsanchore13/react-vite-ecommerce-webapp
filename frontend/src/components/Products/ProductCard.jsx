import React from "react";
import { Box, Image, Text, Flex, Icon, Badge, Stack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";


function Rating({ rating, numReviews }) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                // color={i < rating ? "red.500" : "gray.300"}
                fontSize={"1.2rem"}
                color="#ECC94B"
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return (
              <BsStarHalf fontSize={"1.2rem"} color="#ECC94B" key={i} style={{ marginLeft: "1" }} />
            );
          }
          return <BsStar key={i} fontSize={"1.2rem"} color="#ECC94B" style={{ marginLeft: "1" }} />;
        })}
    </Box>
  );
}

const ProductCard = ({ product }) => {
  const {
    image,
    title,
    rating,
    price,
    discount: { status, percent },
  } = product;

  const renderRatingStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <Icon
          key={i}
          as={FaStar}
          color="yellow.400"
          // background={`linear-gradient(90deg, rgba(254,198,51,1) 56%, rgba(255,255,255,1) 56%)`}
          // backgroundClip={"text"}
        />
      );
    }
    return stars;
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      p={4}
      minW={"250px"}
    >
      <Image src={image} alt={title} />
      <Box mt={4}>
        <Text fontSize="xl" fontWeight="semibold" mb={2}>
          {title}
        </Text>
        <Flex alignItems="center" mb={2} gap={"1rem"}>
          <Box>
            {/* {renderRatingStars()} */}
            <Rating rating={rating} ></Rating>
            </Box>
          <Text fontWeight={600} fontSize={"18px"}> {rating}/5</Text>
        </Flex>
        <Text fontSize="lg" fontWeight="bold" mb={2}></Text>
        <Flex gap={"1rem"}>
          <Text fontWeight={700} fontSize={"xl"}>
            ${status ? price - (price * percent) / 100 : price}
          </Text>
          {status && (
            <Stack direction={"row"} align={"center"} spacing={"0.5rem"}>
              <Text
                textDecoration={"line-through"}
                color={"gray.500"}
                fontWeight={700}
                fontSize={"xl"}
              >
                $199
              </Text>
              <Badge
                rounded="full"
                px="2"
                fontSize="0.8em"
                colorScheme="red"
                color={"red"}
              >
                -{percent}%
              </Badge>
            </Stack>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductCard;

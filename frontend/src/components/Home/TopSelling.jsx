import { Box, Button, HStack, useMediaQuery } from "@chakra-ui/react";
import HeadingTitle from "../Heading/HeadingTitle";
import ProductCard from "../Products/ProductCard";

const products = [
  {
    id: 1,
    title: "Vertical Striped Cool Shirt",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 1,
    price: 120,
    discount: {
      status: false,
    },
  },
  {
    id: 2,
    title: " Vertical Striped Cool Shirt",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 1.5,
    price: 220,
    discount: {
      status: true,
      percent: 20,
    },
  },
  {
    id: 3,
    title: "Vertical Striped Cool Shirt",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 2.5,
    price: 6520,
    discount: {
      status: false,
    },
  },
  {
    id: 4,
    title: "Vertical Striped Cool Shirt",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    price: 56420,
    discount: {
      status: true,
      percent: 20,
    },
  },
];



const TopSelling = () => {
  const [isSmallerThan420] = useMediaQuery("(max-width: 420px)");

  const showAllProducts = () => {
    console.log("show all products");
  };
  return (
    <Box>
      <HeadingTitle title="TOP SELLING" />

      <HStack
        spacing={8}
        p={isSmallerThan420 ? "1rem" : "3rem"}
        scrollSnapAlign={"start"}
        // overflowX={ isSmallerThan420 ? "auto" :"scroll"} w="100%"
        overflowX={"auto"}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </HStack>

      <Box w={"100%"} textAlign={"center"}>
        <Button
          minW={isSmallerThan420 ? "95vw" : "200px"}
          variant={"outline"}
          colorScheme="gray"
          rounded={"30px"}
          color={"gray"}
          m={"20px auto"}
          onClick={showAllProducts}
        >
          View All
        </Button>
      </Box>
     
    </Box>
  );
};

export default TopSelling;

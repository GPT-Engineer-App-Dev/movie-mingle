import { useState } from "react";
import { Container, Text, VStack, HStack, IconButton } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

const Index = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Rate This Movie</Text>
        <HStack spacing={1}>
          {[...Array(5)].map((_, i) => {
            const ratingValue = i + 1;
            return (
              <IconButton
                key={i}
                icon={<FaStar />}
                color={ratingValue <= (hover || rating) ? "yellow.400" : "gray.300"}
                onClick={() => setRating(ratingValue)}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
                aria-label={`Rate ${ratingValue} stars`}
                variant="ghost"
                size="lg"
              />
            );
          })}
        </HStack>
        <Text>{rating ? `You rated this movie ${rating} out of 5 stars` : "Click a star to rate"}</Text>
      </VStack>
    </Container>
  );
};

export default Index;
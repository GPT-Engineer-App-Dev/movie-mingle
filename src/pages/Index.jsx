import { Container, Text, VStack, Heading, Box, Image, HStack, Button } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Movie Review Hub</Heading>
        <Text fontSize="lg" textAlign="center">Discover and review your favorite movies</Text>
        <Box boxSize="sm" mt={6}>
          <Image src="/images/movie_poster.jpg" alt="Movie Poster" borderRadius="md" />
        </Box>
        <HStack spacing={2} mt={4}>
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaStar color="gray" />
        </HStack>
        <Button colorScheme="teal" size="lg" mt={6}>Read Reviews</Button>
      </VStack>
    </Container>
  );
};

export default Index;
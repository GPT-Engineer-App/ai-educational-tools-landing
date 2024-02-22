import React from "react";
import { Box, Button, Container, Flex, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaRobot, FaChalkboardTeacher, FaBrain } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Stack spacing={10} alignItems="center" justifyContent="center" py={10}>
        {/* Hero Section */}
        <Box textAlign="center">
          <Heading mb={4}>Revolutionize Your Learning with AI</Heading>
          <Text fontSize="lg">Discover the future of education with our AI-powered educational tools designed to enhance learning experiences for students and educators alike.</Text>
        </Box>

        {/* Features Section */}
        <Stack spacing={8} direction={{ base: "column", md: "row" }}>
          <Feature icon={<FaRobot />} title="AI Tutors" description="Personalized tutoring sessions with AI to help you understand complex topics." />
          <Feature icon={<FaChalkboardTeacher />} title="Smart Classrooms" description="Interactive and intelligent classrooms that adapt to students' learning styles." />
          <Feature icon={<FaBrain />} title="Adaptive Learning" description="Curriculums that evolve based on your learning progress and performance." />
        </Stack>

        {/* Call to Action Section */}
        <Box textAlign="center">
          <Button size="lg" colorScheme="teal" leftIcon={<FaRobot />}>
            Get Started
          </Button>
        </Box>
      </Stack>

      {/* Image Section */}
      <Flex justifyContent="center" py={10}>
        <Image borderRadius="md" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMEVkdWNhdGlvbnxlbnwwfHx8fDE3MDg1ODMzMzR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="AI Education" objectFit="cover" boxSize="500px" />
      </Flex>
    </Container>
  );
};

// Feature component used in the Features Section
const Feature = ({ icon, title, description }) => {
  return (
    <Stack spacing={4} alignItems="center" textAlign="center" p={5} bg={useColorModeValue("gray.100", "gray.700")} rounded="xl">
      <Flex w={16} h={16} align="center" justify="center" color="teal.500" rounded="full" bg={useColorModeValue("teal.100", "teal.900")}>
        {icon}
      </Flex>
      <Text fontWeight="bold" fontSize="lg">
        {title}
      </Text>
      <Text color={useColorModeValue("gray.600", "gray.400")}>{description}</Text>
    </Stack>
  );
};

export default Index;

import { Container, Text, VStack } from "@chakra-ui/react";
import ChatUI from "../components/ChatUI";

const Chat = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Chat with our AI</Text>
        <ChatUI />
      </VStack>
    </Container>
  );
};

export default Chat;
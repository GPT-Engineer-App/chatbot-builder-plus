import React, { useState } from 'react';
import { Box, Input, Button, VStack, Text } from '@chakra-ui/react';

const ChatUI = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (input.trim() === '') return;
    const newMessage = { text: input, sender: 'user' };
    setMessages([...messages, newMessage]);
    setInput('');

    // Simulate bot response
    const botMessage = { text: `Bot response to: ${input}`, sender: 'bot' };
    setMessages([...messages, newMessage, botMessage]);
  };

  return (
    <Box p={4} borderWidth={1} borderRadius="lg" width="100%" maxW="md">
      <VStack spacing={4}>
        <Box width="100%" height="300px" overflowY="scroll" borderWidth={1} borderRadius="lg" p={2}>
          {messages.map((msg, index) => (
            <Text key={index} align={msg.sender === 'user' ? 'right' : 'left'}>
              {msg.text}
            </Text>
          ))}
        </Box>
        <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." />
        <Button onClick={sendMessage}>Send</Button>
      </VStack>
    </Box>
  );
};

export default ChatUI;
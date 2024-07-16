import { useState } from 'react';
import { Box, Button, Input, Stack } from '@chakra-ui/react';

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <Box mb={4}>
      <Stack direction="row">
        <Input
          placeholder="Add a new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button onClick={handleAdd} colorScheme="teal">
          Add
        </Button>
      </Stack>
    </Box>
  );
};

export default AddTodo;

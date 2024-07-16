import { Checkbox, Text } from '@chakra-ui/react';

const TodoItem = ({ todo, toggleComplete }) => {
  return (
    <Checkbox
      isChecked={todo.completed}
      onChange={() => toggleComplete(todo.id)}
      mb={2}
    >
      <Text as={todo.completed ? 'del' : ''}>{todo.text}</Text>
    </Checkbox>
  );
};

export default TodoItem;

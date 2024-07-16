import { VStack } from '@chakra-ui/react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete }) => {
  return (
    <VStack>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
      ))}
    </VStack>
  );
};

export default TodoList;

import { useState } from 'react';
import { Container, Heading } from '@chakra-ui/react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

export default function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <Container mt={8}>
      <Heading mb={4}>Todo App</Heading>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} />
    </Container>
  );
}

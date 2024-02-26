import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/todo-input";
import TodoList from "./components/todo-list";
import { Todo } from "./types";
import { Box, Typography } from "@mui/material";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTask = (task: string) => {
    const newTodo: Todo = { id: Date.now(), task, isCompleted: false };

    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id: number) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );

  const deleteTask = (id: number) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);

    setTodos(filteredTodos);
  };

  return (
    <Box sx={{ bgcolor: "#242424", padding: 2, borderRadius: 2 }}>
      <Typography variant="h3" sx={{ mb: 2 }}>
        To-Do List
      </Typography>

      <TodoInput addTask={addTask} />

      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </Box>
  );
};

export default App;

import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

type Props = {
  addTask: (task: string) => void;
};

const TodoInput = ({ addTask }: Props) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!input) return;

    addTask(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
      <TextField
        inputProps={{ style: { color: 'white' } }}
        variant="outlined"
        label="Add a new task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        sx={{ color: 'white', border: '1px solid gray', borderRadius: '5px' }}
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </form>
  );
};

export default TodoInput;

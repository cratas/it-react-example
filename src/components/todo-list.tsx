import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Todo } from '../types';

interface Props {
  todos: Todo[];
  toggleComplete: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TodoList = ({ todos, toggleComplete, deleteTask }: Props) => {
  const sortedTodos = todos.sort((a, b) =>
    a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? 1 : -1
  );

  return (
    <List>
      {sortedTodos.map(({ id, isCompleted, task }) => (
        <ListItem
          key={id}
          dense
          sx={{
            border: isCompleted ? '1px solid gray' : '1px solid white',
            borderRadius: '5px',
            mb: 1,
          }}
        >
          <ListItemText
            primary={task}
            style={{
              color: isCompleted ? 'gray' : 'white',
              textDecoration: isCompleted ? 'line-through' : 'none',
            }}
          />

          <IconButton onClick={() => deleteTask(id)} sx={{ color: 'gray' }}>
            <DeleteIcon />
          </IconButton>

          <IconButton
            onClick={() => toggleComplete(id)}
            sx={{ color: isCompleted ? 'white' : 'gray' }}
          >
            <CheckCircleIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;

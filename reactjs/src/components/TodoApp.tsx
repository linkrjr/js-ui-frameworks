import React, { useState } from 'react'
import {
  Card,
  CardContent,
  TextField,
  Button,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Checkbox,
  Paper,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import './TodoApp.css'

interface Todo {
  id: number
  text: string
  completed: boolean
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [inputValue, setInputValue] = useState<string>('')
  const [nextId, setNextId] = useState<number>(1)

  const addTodo = (): void => {
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        {
          id: nextId,
          text: inputValue,
          completed: false,
        },
      ])
      setNextId(nextId + 1)
      setInputValue('')
    }
  }

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const clearCompleted = (): void => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  const completedCount = todos.filter((t) => t.completed).length
  const totalCount = todos.length

  return (
    <Box className="todo-container">
      <Card className="todo-card">
        <Box className="card-header">
          <Typography variant="h3" className="header-title">
            My Todos
          </Typography>
          <Typography variant="body2" className="subtitle">
            {completedCount} of {totalCount} completed
          </Typography>
        </Box>

        <CardContent className="card-content">
          <Box className="input-section">
            <TextField
              fullWidth
              placeholder="Add a new todo"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              variant="outlined"
              size="small"
              className="todo-input"
            />
            <Button
              variant="contained"
              onClick={addTodo}
              className="btn-add"
            >
              Add
            </Button>
          </Box>

          {todos.length === 0 ? (
            <Box className="empty-state">
              <Typography variant="body1">
                No todos yet. Add one to get started!
              </Typography>
            </Box>
          ) : (
            <Paper className="todo-list">
              <List>
                {todos.map((todo) => (
                  <ListItem
                    key={todo.id}
                    className={`todo-item ${todo.completed ? 'completed' : ''}`}
                  >
                    <ListItemIcon>
                      <Checkbox
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                        sx={{ color: '#667eea' }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={todo.text}
                      className="todo-text"
                    />
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => deleteTodo(todo.id)}
                      className="btn-delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItem>
                ))}
              </List>
            </Paper>
          )}

          {todos.length > 0 && (
            <Box className="actions">
              <Button
                variant="contained"
                onClick={clearCompleted}
                className="btn-clear"
              >
                Clear Completed
              </Button>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  )
}

export default TodoApp

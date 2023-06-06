import { ToDoStatusEnum } from '@/enums/ToDoStatusEnum';
import { ToDo } from '@/props';
import { PropsWithChildren, createContext, useContext, useState } from 'react'

interface ToDoContextData {
  todos: ToDo[];
  addToDo: (name: string) => void;
  removeToDo: (id: string) => void;
}

const ToDoContext = createContext<ToDoContextData | null>(null);

export const ToDoProvider = ({ children }: PropsWithChildren) => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const addToDo = (name: string) => {
    const id = Math.round(Math.random() * Math.random() * 1000000).toString();
    setTodos(oldState => [...oldState, { id, name, status: ToDoStatusEnum.PENDING }]);
  }

  const removeToDo = (id: string) => {
    setTodos(oldState => oldState.filter(item => item.id !== id));
  }

  return (
    <ToDoContext.Provider value={{ todos, addToDo, removeToDo }}>
      {children}
    </ToDoContext.Provider>
  )
}

export const useToDo = (): ToDoContextData => {
  const context = useContext(ToDoContext);

  if (!context) {
    throw new Error('useToDo should be used inside a ToDoProvider');
  }

  return context;
}

import { PropsWithChildren, createContext, useCallback, useContext, useEffect, useState } from 'react'

import { ToDoStatusEnum } from '@/enums/ToDoStatusEnum';
import { ToDo } from '@/props';
import { getData, storeData } from '@/service/storage';

interface ToDoContextData {
  todos: ToDo[];
  addToDo: (name: string) => void;
  removeToDo: (id: string) => void;
  toggleToDo: (id: string) => void;
}

const storageKey = '@todo_list:data';

const ToDoContext = createContext<ToDoContextData | null>(null);

export const ToDoProvider = ({ children }: PropsWithChildren) => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const getStoredData = useCallback(async () => {
    const stored = await getData(storageKey);
    if (stored && !stored.error) {
      setTodos(stored.data)
    }
  }, [])

  useEffect(() => {
    getStoredData();
  }, [])

  const addToDo = (name: string) => {
    const id = Math.round(Math.random() * Math.random() * 1000000).toString();
    const newTodoList = [...todos, { id, name, status: ToDoStatusEnum.PENDING }];
    setTodos(newTodoList);
    storeData(storageKey, newTodoList);
  }

  const removeToDo = (id: string) => {
    const newTodoList = todos.filter(item => item.id !== id);
    setTodos(newTodoList);
    storeData(storageKey, newTodoList);
  }


  const toggleToDo = (id: string) => {
    const newTodoList = todos.map(item => {
      let status = item.status;
      if (item.id === id) {
        status = item.status === ToDoStatusEnum.FINISHED
          ? ToDoStatusEnum.PENDING
          : ToDoStatusEnum.FINISHED;
      }
      return { ...item, status }
    });
    setTodos(newTodoList);
    storeData(storageKey, newTodoList);
  }

  return (
    <ToDoContext.Provider value={{ todos, addToDo, removeToDo, toggleToDo }}>
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

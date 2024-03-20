import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';



import { Container, ToDoList, Input, Button, ListItem, Trash, Check, Title } from './styled.js'

function App() {
  const [list, setList] = useState([])

  const [task, setTask] = useState('')

  function inputChange(event) {
    setTask(event.target.value)
  }

  function buttonClicked() {
    if (task) {
      setList([...list, { id: uuid(), task, finished: false }])
    } else {
      alert('Digite uma tarefa!')
    }
  }

  function taskCompleted(id) {

    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  function deleteTask(id) {

    const newList = list.filter( item => item.id !== id)
  
    setList(newList)
  }

  return (
    <Container>
      <ToDoList>
        <Input onChange={inputChange} placeholder="Digite sua tarefa aqui..." />
        <Button onClick={buttonClicked}>Adicionar</Button >

        <ul>
          { list.length > 0 ? (
            list.map(item => (
            <ListItem isFinished={item.finished} key={item.id}>
              <Check onClick={() => taskCompleted(item.id)} />
              <li>{item.task}</li>
              <Trash onClick={() => deleteTask(item.id)}/>
            </ListItem>
          ))
          ) : (
              <Title> NÃO HÁ TAREFAS </Title>
          )}
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App

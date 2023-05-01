import { Container, Flex, Heading } from '@chakra-ui/react'
import { Todos, Filters, Form } from './'
import { useTodo } from '../hooks/useTodo'

const Wrapper = () => {
  const { completeTask, tasks, removeTask } = useTodo()
  console.log(tasks)

  return (
    <Container maxW='container.sm'>
      <Flex direction='column' alignItems='center' pt={28}>
        <Heading>ToDo Task</Heading>
        <Form />
        <Todos
          onToggleTask={completeTask}
          onRemoveTask={removeTask}
          tasks={tasks}
        />
        <Filters />
      </Flex>
    </Container>
  )
}

export default Wrapper

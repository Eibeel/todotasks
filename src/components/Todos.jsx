import { Box, VStack } from '@chakra-ui/react'
import { Todo } from './'

export const Todos = ({ tasks, onRemoveTask, onToggleTask }) => {
  return (
    <VStack mt={6} rowGap={8} w='100%' flexDir='column-reverse'>
      {
        tasks?.map((task) => (
          <Box w='100%' key={task.id} px={4} py={2} boxShadow='rgba(0, 0, 0, 0.1) 0px 1px 2px 0px'>
            <Todo
              key={task.id}
              id={task.id}
              title={task.title}
              completed={task.completed}
              onRemoveTask={onRemoveTask}
              onToggleTask={onToggleTask}
            />
          </Box>
        ))
      }
    </VStack>
  )
}

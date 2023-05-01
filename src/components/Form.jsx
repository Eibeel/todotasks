import { useRef, useState } from 'react'
import { Box, Button, Flex, Input, useToast } from '@chakra-ui/react'
import { useTodo } from '../hooks/useTodo'

export const Form = () => {
  const { addTask } = useTodo()
  const [title, setTitle] = useState('')
  const toast = useToast()
  const toastIdRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.length > 0) {
      addTask({ title, completed: false })
      setTitle('')
      toast.closeAll(toastIdRef.current)
    }

    if (title.length === 0) {
      toast.closeAll(toastIdRef.current)
      toast({
        description: 'Debes ingresar un texto para agregar una tarea',
        position: 'bottom-left'
      })
    }
  }

  return (
    <Box w='100%'>
      <form onSubmit={handleSubmit}>
        <Flex mt={8} flexDir={{ base: 'column', md: 'row' }} gap={2}>
          <Input
            value={title}
            onChange={({ target }) => setTitle(target.value)}
            color='gray.700'
            placeholder='¿Algo por hacer?'
            bg='brand.10'
            focusBorderColor='brand.10'
            border='none'
          />
          <Button bgColor='brand.10' variant='ghost' fontSize='14px' fontWeight='medium' type='submit'>
            Añadir tarea
          </Button>
        </Flex>
      </form>
    </Box>
  )
}

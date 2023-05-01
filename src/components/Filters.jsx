import { Button, Flex } from '@chakra-ui/react'
import { FILTERS_BUTTONS } from '../consts'
import { useTodo } from '../hooks/useTodo'

export const Filters = () => {
  const { filterChange, clearAll } = useTodo()

  return (
    <Flex flexDir={{ base: 'column', md: 'row' }} mt={8} mb={16} w='100%' justifyContent='space-between' gap={2}>
      {
        FILTERS_BUTTONS.map(filter => (
          <Button
            key={filter.value}
            bgColor='brand.10'
            variant='ghost'
            fontSize='14px'
            fontWeight='medium'
            value={filter.value}
            onClick={(e) => { filterChange(e.target.value) }}
          >
            {filter.tag}
          </Button>
        ))
      }
      <Button
        colorScheme='red'
        fontSize='14px'
        fontWeight='medium'
        onClick={clearAll}
      >
        Borrar todo
      </Button>
    </Flex>
  )
}

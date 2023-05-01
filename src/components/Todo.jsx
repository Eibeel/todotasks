import { Checkbox, Flex, HStack, IconButton, Text } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'

export const Todo = ({ id, title, onRemoveTask, onToggleTask, completed }) => {
  return (
    <Flex
      alignItems='center'
      justifyContent='space-between'
    >
      <HStack spacing={6}>
        <Checkbox
          isChecked={completed}
          onChange={({ target }) => {
            onToggleTask(id, target.checked)
          }}
        />
        <Text as={completed ? 'del' : ''}>
          {title}
        </Text>
      </HStack>
      <IconButton
        icon={<DeleteIcon />}
        variant='unstyled'
        color='red.400'
        onClick={() => { onRemoveTask(id) }}
      />
    </Flex>
  )
}

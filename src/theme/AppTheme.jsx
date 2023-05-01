import { ChakraProvider } from '@chakra-ui/react'
import { defaultTheme } from './defaultTheme'

export const AppTheme = ({ children }) => {
  return (
    <ChakraProvider theme={defaultTheme}>
      {children}
    </ChakraProvider>
  )
}

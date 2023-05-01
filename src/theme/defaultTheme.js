import { extendTheme } from '@chakra-ui/react'

export const defaultTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#fef9f1'
      }
    }
  },
  colors: {
    brand: {
      10: '#f7f1e7'
    }
  },
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Josefin Sans'
  }
})

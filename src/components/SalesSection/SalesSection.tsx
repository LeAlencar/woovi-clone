import { Box, Container, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react"
import SalesHeader from "./SalesHeader"


const SalesSection = () => {
  return (
    <>
      <SalesHeader
       title="Você define o cashback!" 
       subtitle="Suas vendas, suas regras"
      />
      
      <Flex
          justifyContent="center"
          alignItems="center"
          marginTop="60px"
        >
          <Box width="800px" height="400px">
            <Image alt="Pagamentos Woovi" src="https://woovi.com/static/f7bc61b684f355dcc619b37da2727fa7/56a0c/cashback-sms.png" />
          </Box>
        </Flex>
    </>
  )
}



export default SalesSection
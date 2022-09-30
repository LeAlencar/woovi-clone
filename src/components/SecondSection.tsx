import { Box, Container, Flex, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react"


const SecondSection = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <Container
      height="500px"
      minH="150px"
      display="flex"
      bg="linear-gradient(to right, rgb(19, 58, 111), rgb(19, 58, 111))"
      width="100%"
      placeContent="center"
      maxWidth="100%"
    >
      <Flex
        maxWidth="1100px"
        ml="30px"
        mr="30px"
        flex="1 1 0%"
        justifyContent="center"
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          flex="1.2 1 0%"
          flexDirection="column"
        >
          <Box alignSelf="flex-start">
            <Heading as="h1" margin="0 0 2rem" fontSize="3rem" lineHeight="1.1" color="white" fontWeight="700">Simples e rápido, como o Pix.</Heading>
          </Box>
          <Box mt="8px" alignSelf="flex-start">
            <Text as="a" color="rgb(3, 214, 157)" fontWeight="bold" textDecoration="underline" href="https://woovi.com/register">Cadastre-se agora ➜</Text>
          </Box>
        </Flex>

        {isWideVersion && (
          <Flex
          justifyContent="center"
          alignItems="flex-end"
          flexDirection="column"
        >
          <Box width="400px" height="400px">
            <Image alt="Pagamentos Woovi" src="https://woovi.com/static/21962e88dd4b260eb35453c9e32817f3/7f639/cashback-flow.png" />
          </Box>
        </Flex>
        )}

        

      </Flex>
    </Container>
  )
}

export default SecondSection
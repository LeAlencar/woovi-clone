import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react"


const FirstSection = () => {
  return (
    <Container
      height="630px"
      minH="450px"
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
            <Heading as="h1" margin="0 0 2rem" fontSize="3rem" lineHeight="1.1" color="white" fontWeight="700">Cashback: Recompense seus clientes na hora</Heading>
          </Box>
          <Box mt="8px" alignSelf="flex-start">
            <Text as="a" color="rgb(3, 214, 157)" fontWeight="bold" textDecoration="underline" href="https://woovi.com/register">Cadastre-se agora ➜</Text>
          </Box>
        </Flex>

        <Flex

          justifyContent="flex-end"
          flexDirection="column"
        >
          <Box>
            <Image width="591" height="591" alt="Man cashback" src="https://woovi.com/static/f5c57b739d20eedfc68ee0abf94b892d/2f966/man-cashback.png">
            </Image>
          </Box>
        </Flex>

      </Flex>
    </Container>
  )
}

export default FirstSection
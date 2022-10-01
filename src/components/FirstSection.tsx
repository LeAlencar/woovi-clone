import { Box, Container, Flex, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react"

const FirstSection = ({section}: any) => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

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
        flexDirection={isWideVersion ? "row" : "column"}
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          flex="1.2 1 0%"
          flexDirection="column"
        >
          <Box alignSelf="flex-start">
            <Heading as="h1" margin="0 0 2rem" fontSize={["2rem", "2rem", "2rem","3rem"]} lineHeight="1.1" color="white" fontWeight="700">{section.title}</Heading>
          </Box>
          <Box mt="8px" alignSelf="flex-start" >
            <Text as="a" color="rgb(3, 214, 157)" fontWeight="bold" textDecoration="underline" href="https://woovi.com/register">Cadastre-se agora ➜</Text>
          </Box>
        </Flex>
        
        <Flex
          justifyContent={isWideVersion ? "flex-end" : "center"}
          flexDirection="column"

        >
          <Box display="flex" justifyContent={isWideVersion ? "flex-end" : "center"}>
            <Image width={["15rem", "15rem","25rem","35rem"]} height={["15rem", "15rem","25rem","35rem"]} alt="Man cashback" src={section.image[0].url}>
            </Image>
          </Box>
        </Flex>

        
        

      </Flex>
    </Container>
  )
}


export default FirstSection
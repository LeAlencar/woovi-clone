import { Box, Container, Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react"
import Image from "next/future/image"
import { SectionProps } from "../types/api"


const OmniSection = ({section}: SectionProps) => {
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
            <Heading as="h1"  fontSize="3rem" lineHeight="1.1" color="white" fontWeight="700">{section.title}</Heading>
            <Text color="white">{section.subtitle}</Text>
          </Box>
          <Box mt="20px" alignSelf="flex-start">
            <Text as="a" color="rgb(3, 214, 157)" fontWeight="bold" textDecoration="underline" href="https://woovi.com/register">Cadastre-se agora ➜</Text>
          </Box>
        </Flex>
        {isWideVersion && (
           <Flex
           justifyContent="center"
           alignItems="flex-end"
           flexDirection="column"
           flex="1 1 0%"
         >
           <Box overflow="hidden" width="550px" height="515px">
             <Image width="500" height="500" alt="Pagamentos Woovi" src={section.image[0].url} />
           </Box>
         </Flex>
        )}
       

      </Flex>
    </Container>
  )
}

export default OmniSection
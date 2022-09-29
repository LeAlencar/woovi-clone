import { Container, Flex, Heading, Text } from "@chakra-ui/react"

interface SalesHeaderProps {
  title: string
  subtitle: string
}

const SalesHeader = ({title, subtitle}: SalesHeaderProps) => {
  return (
    <Container
        display="flex"
        flexDirection="column"
        alignItems="center"
        maxWidth="1200px"
        pt="30px"
        pb="30px"
      >
        <Flex
          maxWidth="1100px"
          ml="30px"
          mr="30px"
          flex="1 1 0%"
          flexDirection="column"
        >
          <Heading
            textAlign="center"
            fontWeight="800"
            fontSize="32px"
            color="rgb(3, 214, 157)"
            margin="20px 0px 0px"
          >
            {title}
          </Heading>
          <Text mt="20px" textAlign="center">{subtitle}</Text>
        </Flex>
      </Container>
  )
}

export default SalesHeader
import { Container, Flex, Heading } from "@chakra-ui/react"

interface CashBackHeaderProps {
  text: string
}

const CashBackHeader = ({text}: CashBackHeaderProps) => {
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
        >
          <Heading
            textAlign="center"
            fontWeight="800"
            fontSize="32px"
            color="rgb(3, 214, 157)"
            margin="20px 0px 0px"
          >
            {text}
          </Heading>
        </Flex>
      </Container>
  )
}

export default CashBackHeader
import { Box, Container, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { SectionProps } from "../../types/api"
import CashBackHeader from "./CashBackHeader"
import CashBackItem from "./Item"


const CashBackSection = ({section}: SectionProps) => {
  return (
    <>
      <CashBackHeader text={section.title} />
      <Flex
        justifyContent="center"
        padding="0px 10px 50px"
        mt="20px"
      >
        <Box
          mt="20px"
          maxWidth="1100px"
          ml="30px"
          mr="30px"
          flex="1 1 0%"
        >
          <SimpleGrid
            width="100"
            columns={{ sm: 1, md: 3, xl: 4 }}
            gap="20px"
          >
            <CashBackItem text="Dinheiro de volta de verdade" />
            <CashBackItem text="Mais conversão na hora da venda" />
            <CashBackItem text="Cashback instantâneo no CPF do seu cliente" />
            <CashBackItem text="Sem SETUP" />
            <CashBackItem text="Sem Integração" />
            <CashBackItem text="É fácil ganhar cashback na Woovi" />
            <CashBackItem text="Cashback com Pix" />
            <CashBackItem text="Simples e rápido" />
          </SimpleGrid>
        </Box>
      </Flex>
    </>
  )
}



export default CashBackSection
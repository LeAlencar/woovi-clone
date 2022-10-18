import { Box, Flex } from "@chakra-ui/react"
import Image from "next/future/image"
import { SectionProps } from "../../types/api"
import SalesHeader from "./SalesHeader"


const SalesSection = ({section}: SectionProps) => {
  return (
    <>
      <SalesHeader
       title={section.title}
       subtitle={section.subtitle}
      />
      
      <Flex
          justifyContent="center"
          alignItems="center"
          marginTop="60px"
        >
          <Box height="400px">
            <Image width="700" height="700" alt="Pagamentos Woovi" src={section.image[0].url} />
          </Box>
        </Flex>
    </>
  )
}



export default SalesSection
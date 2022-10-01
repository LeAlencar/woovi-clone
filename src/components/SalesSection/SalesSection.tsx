import { Box, Flex, Image } from "@chakra-ui/react"
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
          <Box width="800px" height="400px">
            <Image alt="Pagamentos Woovi" src={section.image[0].url} />
          </Box>
        </Flex>
    </>
  )
}



export default SalesSection
import { Button, Flex, Text, useBreakpointValue, useMediaQuery } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Logo from "./Logo"


const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [isMobile] = useMediaQuery("(max-width: 600px)")

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  const changeBackground = () => {
    if(window.scrollY >= 60) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })


  return (
    
    <Flex
      w="100%"
      as="header"
      flexDirection="row"
      justifyContent="center"
      h="60px"
      alignItems="center"
      position={scrolled ? 'fixed' : 'absolute'}
      z-index={scrolled ? '99' : ''}
      bgColor={scrolled ? "white" : "rgb(19, 58, 111)"}
    >
      <Flex
        maxW="1110px"
        flex="1 1 0%"
        flexDirection="row"
        justifyContent={isMobile ? "center": "space-around"}
        width="100%"
        mr="30px"
        ml="30px"
      >
        <Logo isWideVersion={isWideVersion} scrolled={scrolled}/>
        {isWideVersion && (
          <Flex
            align="center"
            justifyContent="space-between"
            ml="auto"
          >
          
            <>
              <Text color={scrolled ? "rgb(96, 115, 137)" : "white"} as="a">Para Você</Text>
              <Text color={scrolled ? "rgb(96, 115, 137)" : "white"} as="a" ml="10">Para seu negócio</Text>
              <Text cursor="pointer" as="a" backgroundColor="transparent" mr="5" ml="5" fontWeight="normal" variant="link" color={scrolled ? "rgb(96, 115, 137)" : "white"}>
                Login
              </Text>
            </>
          

          {!isMobile && (
            <Button 
            borderRadius="20px" 
            _hover={{
              color: "rgb(96, 115, 137)",
              backgroundColor: "white"
            }} 
            fontWeight="500" fontSize="15px" 
            lineHeight="32px" 
            minWidth="165px" 
            textAlign="center" 
            border={scrolled ? "1px solid rgb(96, 115, 137)"  : "1px solid white" }
            color={scrolled ? "rgb(96, 115, 137)" : "white"}
            bgColor="transparent"
          >
            Cadastre-se
          </Button>
          )}

          
          
        </Flex>
        )}
      </Flex>
      
    </Flex>
  )
}

export default Header
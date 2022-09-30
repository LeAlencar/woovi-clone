import { Text } from "@chakra-ui/react";

interface HeaderProps {
  scrolled?: boolean
  isMobile?: boolean
}

const Logo = ({scrolled = false, isMobile}: HeaderProps) => {
  const color = scrolled ? "#03D69D" : "#FFFFFF" 
  return(
    <Text
      as="a"
      href="/"
      fontSize={["2xl","3xl"]}
      fontWeight="bold"
      display="flex"
      justifyContent={isMobile ? "center" : "flex-start"}
      letterSpacing="tight"
      w="64"
    >
      <svg width="120" viewBox="0 0 377 144" version="1.1"><desc>Woovi Logo</desc><g fill={color}><path d="M296.8,112L296.8,112c-5.9,0-11.2-3.5-13.4-9l-19.9-47.8c-2.5-6,1.9-12.5,8.3-12.5h0c3.7,0,7,2.2,8.4,5.7 l16.6,41.3l16.6-41.3c1.4-3.4,4.7-5.7,8.4-5.7h0c6.5,0,10.8,6.6,8.3,12.5L310.2,103C307.9,108.5,302.6,112,296.8,112z"></path><path d="M357.8,14.5c2.1,2.2,3.2,4.7,3.2,7.7c0,3-1.1,5.6-3.2,7.6c-2.1,2-4.8,3-7.9,3c-3.2,0-5.9-1-8-3 s-3.1-4.6-3.1-7.6c0-3,1.1-5.5,3.2-7.7s4.8-3.3,7.9-3.3S355.7,12.4,357.8,14.5z M340.8,102.9V52c0-5,4.1-9.1,9.1-9.1l0,0 c5,0,9.1,4.1,9.1,9.1v50.8c0,5-4.1,9.1-9.1,9.1l0,0C344.9,112,340.8,107.9,340.8,102.9z"></path><g><path d="M77.7,112L77.7,112c-5.5,0-10.2-3.6-11.6-8.8L57,69.4l-9.2,33.8c-1.4,5.2-6.1,8.8-11.5,8.8h0 c-5.3,0-10-3.5-11.5-8.7L10.6,53.7c-1.5-5.3,2.5-10.6,8-10.6h0c3.7,0,7,2.5,8,6.1L37,86.5l9.7-35.6c1.3-4.6,5.4-7.8,10.2-7.8h0 c4.8,0,9,3.2,10.2,7.8l9.7,35.6l10.3-37.3c1-3.6,4.3-6.1,8-6.1h0.1c5.5,0,9.5,5.3,8,10.6l-14.2,49.7C87.7,108.5,83,112,77.7,112z"></path></g><path d="M162.2,83.9c4.9,4.9,9.4,9.4,13.9,13.9c-10.2,12.5-22.9,20.2-39.8,17c-15.7-3-26-12.7-30.1-28.3 c-4.3-16.5,3.3-33.6,18-42c14.7-8.4,33.1-6.2,45.2,5.7c13.5,13.2,26.7,26.7,40.1,40c6.9,6.8,17.1,7.6,24.5,2.1 c8.3-6.2,9.8-18.2,3.4-26.3c-6.5-8.1-18.5-9.4-26.3-2.6c-2.7,2.3-4.9,5.2-7.2,7.8c-5-5-9.5-9.5-14-14c9.9-12.2,22.4-20.5,41-16.8 c15.5,3,27,15.7,29.6,31.6c2.5,15.6-5.7,31.7-20,39.2c-14.6,7.6-32.3,5-44.2-6.7c-13.3-13.2-26.5-26.5-39.8-39.7 c-5.7-5.7-13.7-7.4-20.7-4.2c-7.1,3.2-11,8.8-11.1,16.7c-0.1,7.8,3.5,13.7,10.6,17c7.2,3.3,14,2.3,20-2.9 C157.9,89,160,86.3,162.2,83.9z"></path></g></svg>
    </Text>
  )
}

export default Logo
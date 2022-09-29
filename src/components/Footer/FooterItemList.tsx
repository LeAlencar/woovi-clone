import { Link, ListItem } from "@chakra-ui/react"

interface FooterItemListProps {
  text: string
}

const FooterItemList = ({text}: FooterItemListProps) => {
  return (
    <ListItem>
      <Link textDecoration="underline" fontSize="14px" padding="3px 3px 3px 0px" margin="4px 4px 4px 0px" href="/">{text}</Link>
    </ListItem>
  )
}


export default FooterItemList
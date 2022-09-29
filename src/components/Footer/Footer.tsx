import { Flex, Heading, Image, Link, List, ListItem, SimpleGrid, Text } from "@chakra-ui/react"
import FooterItemList from "./FooterItemList"

const Footer = () => {
  return (
    <Flex
      padding="30px"
      flexDirection="column"
      alignItems="center"
      bgColor="rgb(229, 229, 229)"
      color="rgb(19, 58, 111)"
    >
      <SimpleGrid
        maxW="1100px"
        width="100%"
        gap="10px"
        templateColumns="repeat(auto-fit, minmax(180px, 1fr))"
      >
        <Flex flexDirection="column" alignItems="flex-start" color="rgb(19, 58, 111)">
          <Heading color="rgb(116, 116, 116)" as="h5" fontSize=".85rem" margin="0 0 1.45rem" lineHeight="1.1" fontWeight="700">Woovi</Heading>
          <List>
            <FooterItemList text="Para você" />
            <FooterItemList text="Para seu negócio" />
            <FooterItemList text="Termos" />
            <FooterItemList text="Privacidade" />
            <FooterItemList text="Parceiros" />
            <FooterItemList text="Cadastre-se" />
            <FooterItemList text="Status" />
          </List>
        </Flex>
        <Flex flexDirection="column" alignItems="flex-start" color="rgb(19, 58, 111)">
          <Heading color="rgb(116, 116, 116)" as="h5" fontSize=".85rem" margin="0 0 1.45rem" lineHeight="1.1" fontWeight="700">Benefícios</Heading>
          <List>
            <FooterItemList text="Cashback" />
            <FooterItemList text="GiftBack" />
          </List>
        </Flex>
        <Flex flexDirection="column" alignItems="flex-start" color="rgb(19, 58, 111)">
          <Heading color="rgb(116, 116, 116)" as="h5" fontSize=".85rem" margin="0 0 1.45rem" lineHeight="1.1" fontWeight="700">Onde Estamos</Heading>
          <List>
            <ListItem fontSize="14px">
              <Text>Av. Santo Amaro, 3432
                Brooklin - São Paulo.</Text>
            </ListItem>
            <FooterItemList text="Trabalhe conosco" />

          </List>
        </Flex>
        <Flex flexDirection="column" alignItems="flex-start" color="rgb(19, 58, 111)">
          <Heading color="rgb(116, 116, 116)" as="h5" fontSize=".85rem" margin="0 0 1.45rem" lineHeight="1.1" fontWeight="700">About</Heading>
          <List>
            <ListItem fontSize="14px">
              <Text >
              Woovi é uma plataforma para você comprar de forma divertida, ganhar descontos e cashback.
              </Text>
            </ListItem>
            <ListItem fontSize="14px" mt="10px">
              <Text>Copyright ©</Text>
            </ListItem>
            <ListItem>
              <Text>Woovi LLC</Text>
            </ListItem>
          </List>
        </Flex>
      </SimpleGrid>
      <Image width="120px" alt="Logo Woovi" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iaWQxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDM3NyAxNDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM3NyAxNDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0NXtmaWxsOiMwM0Q2OUQ7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwYXRoIGNsYXNzPSJzdDUiIGQ9Ik0yOTYuOCwxMTJMMjk2LjgsMTEyYy01LjksMC0xMS4yLTMuNS0xMy40LTlsLTE5LjktNDcuOGMtMi41LTYsMS45LTEyLjUsOC4zLTEyLjVoMGMzLjcsMCw3LDIuMiw4LjQsNS43DQoJCWwxNi42LDQxLjNsMTYuNi00MS4zYzEuNC0zLjQsNC43LTUuNyw4LjQtNS43aDBjNi41LDAsMTAuOCw2LjYsOC4zLDEyLjVMMzEwLjIsMTAzQzMwNy45LDEwOC41LDMwMi42LDExMiwyOTYuOCwxMTJ6Ii8+DQoJPHBhdGggY2xhc3M9InN0NSIgZD0iTTM1Ny44LDE0LjVjMi4xLDIuMiwzLjIsNC43LDMuMiw3LjdjMCwzLTEuMSw1LjYtMy4yLDcuNmMtMi4xLDItNC44LDMtNy45LDNjLTMuMiwwLTUuOS0xLTgtMw0KCQlzLTMuMS00LjYtMy4xLTcuNmMwLTMsMS4xLTUuNSwzLjItNy43czQuOC0zLjMsNy45LTMuM1MzNTUuNywxMi40LDM1Ny44LDE0LjV6IE0zNDAuOCwxMDIuOVY1MmMwLTUsNC4xLTkuMSw5LjEtOS4xbDAsMA0KCQljNSwwLDkuMSw0LjEsOS4xLDkuMXY1MC44YzAsNS00LjEsOS4xLTkuMSw5LjFsMCwwQzM0NC45LDExMiwzNDAuOCwxMDcuOSwzNDAuOCwxMDIuOXoiLz4NCgk8Zz4NCgkJPHBhdGggY2xhc3M9InN0NSIgZD0iTTc3LjcsMTEyTDc3LjcsMTEyYy01LjUsMC0xMC4yLTMuNi0xMS42LTguOEw1Nyw2OS40bC05LjIsMzMuOGMtMS40LDUuMi02LjEsOC44LTExLjUsOC44aDANCgkJCWMtNS4zLDAtMTAtMy41LTExLjUtOC43TDEwLjYsNTMuN2MtMS41LTUuMywyLjUtMTAuNiw4LTEwLjZoMGMzLjcsMCw3LDIuNSw4LDYuMUwzNyw4Ni41bDkuNy0zNS42YzEuMy00LjYsNS40LTcuOCwxMC4yLTcuOGgwDQoJCQljNC44LDAsOSwzLjIsMTAuMiw3LjhsOS43LDM1LjZsMTAuMy0zNy4zYzEtMy42LDQuMy02LjEsOC02LjFoMC4xYzUuNSwwLDkuNSw1LjMsOCwxMC42bC0xNC4yLDQ5LjdDODcuNywxMDguNSw4MywxMTIsNzcuNywxMTJ6Ig0KCQkJLz4NCgk8L2c+DQoJPHBhdGggY2xhc3M9InN0NSIgZD0iTTE2Mi4yLDgzLjljNC45LDQuOSw5LjQsOS40LDEzLjksMTMuOWMtMTAuMiwxMi41LTIyLjksMjAuMi0zOS44LDE3Yy0xNS43LTMtMjYtMTIuNy0zMC4xLTI4LjMNCgkJYy00LjMtMTYuNSwzLjMtMzMuNiwxOC00MmMxNC43LTguNCwzMy4xLTYuMiw0NS4yLDUuN2MxMy41LDEzLjIsMjYuNywyNi43LDQwLjEsNDBjNi45LDYuOCwxNy4xLDcuNiwyNC41LDIuMQ0KCQljOC4zLTYuMiw5LjgtMTguMiwzLjQtMjYuM2MtNi41LTguMS0xOC41LTkuNC0yNi4zLTIuNmMtMi43LDIuMy00LjksNS4yLTcuMiw3LjhjLTUtNS05LjUtOS41LTE0LTE0YzkuOS0xMi4yLDIyLjQtMjAuNSw0MS0xNi44DQoJCWMxNS41LDMsMjcsMTUuNywyOS42LDMxLjZjMi41LDE1LjYtNS43LDMxLjctMjAsMzkuMmMtMTQuNiw3LjYtMzIuMyw1LTQ0LjItNi43Yy0xMy4zLTEzLjItMjYuNS0yNi41LTM5LjgtMzkuNw0KCQljLTUuNy01LjctMTMuNy03LjQtMjAuNy00LjJjLTcuMSwzLjItMTEsOC44LTExLjEsMTYuN2MtMC4xLDcuOCwzLjUsMTMuNywxMC42LDE3YzcuMiwzLjMsMTQsMi4zLDIwLTIuOQ0KCQlDMTU3LjksODksMTYwLDg2LjMsMTYyLjIsODMuOXoiLz4NCjwvZz4NCjwvc3ZnPg0K"/>
    </Flex>
  )
}


export default Footer
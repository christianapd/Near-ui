import { Box, Text, Flex, Image, Spacer, Link, HStack, Menu, MenuButton, MenuList, Portal,MenuItem  } from '@chakra-ui/react'
import { useState, useEffect,React } from 'react'
const Nav =() =>{
  return (
    <Flex h='80px'  align='center' fontSize='15px' bgColor='white'>
      <Box w='55%' pl='6.5%'>
        <HStack>
        <Link> <Image h='20px'src='https://vitalpoint.ai/wp-content/uploads/2020/06/near_logo-1.png' alt='near_logo' /></Link>
        <Spacer/>
        <Link _Hover='' >Learn</Link>
        <Spacer/>
        <Link>Developers</Link>
        <Spacer/>
        <Link>Founders & Creators</Link>
        <Spacer/>
        <Link>Community</Link>
        <Spacer/>
        <Link>Blog</Link>
        <Spacer/>
        <Link>Careers</Link>
        <Spacer/>
        </HStack>
      </Box>
      <Spacer/>
      <Box  mr='6.5%' align='center'>
      <Menu  >
        <MenuButton>English</MenuButton>
        <Portal>
          <MenuList>
            <MenuItem>Menu 1</MenuItem>
            <MenuItem>New Window</MenuItem>
            <MenuItem>Open Closed Tab</MenuItem>
            <MenuItem>Open File</MenuItem>
          </MenuList>
        </Portal>
        </Menu>
      </Box>
    </Flex>
  )
}
export default Nav

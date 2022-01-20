import { Box, Grid, SimpleGrid, GridItem, Text, Link, Image, Input, Button,HStack, Divider,Center } from '@chakra-ui/react'
import { useState, useEffect,React } from 'react'

const Email =() =>{
  return(
    <Box>
      <Box bgImage="url('https://near.org/wp-content/uploads/2021/10/CITY_02-1024x356.jpg')" w='100%' h='400px' bgRepeat='no-repeat' bgSize='cover'> </Box>

      <SimpleGrid bgColor='#F5F5F5' columns={[1, null, 2]} h='70px'mb='30px'>
        <Box    >
          <Box p='10px' >
            <HStack>
            <Image src='https://lh3.googleusercontent.com/72556uHS4X-4Yqs0WRpmpMcmLm-xSJDTTpQWp129nVbWe2sreUYkp02uY4kcd36Xj5zJOb-vK-sEbxhtUqeAKDAie7y6TzxVbAnY-k_hJw' h='50px' ml='40px'/>
             <Input variant='unstyled' placeholder='Receive email updates' />
             <Button border='1px' borderColor='#5F8AF9' size='sm' pl='20px' pr='20px' borderRadius='90' color='blue.300' bgColor='white' _hover={{color:'white', bgColor:'blue.300'}}>
                Subscribe
            </Button>
            <Box borderRight='2px'w='20px'h='30px'borderColor='#D1D1D1'> </Box>
            </HStack>
          </Box>
        </Box >
        <Box  w='100%' p='20px' color='#9C9FA1'>
          <Text>No fluff, just what you need to know. No spam. Never shared. Opt out at any time.</Text>
        </Box>
      </SimpleGrid>


    </Box>
  )
}
export default Email

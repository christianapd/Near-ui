import { Box, Grid, SimpleGrid, GridItem, Text, Link, Image } from '@chakra-ui/react'
import { useState, useEffect,React } from 'react'

const Feature =() =>{
  return(
    <Box>
    <SimpleGrid columns={[1, null, 2]} >
      <Box bg='red.50' height='450px' p='70px' >
        <Box p='10px' b='0'>
          <Text fontSize='50px'fontWeight='500' mb='10px'mt='10px'>Reimagine your world.</Text>
          <Text textAlign='justify'>Through simple, secure, and scalable technology,
          NEAR empowers millions to invent and explore new experiences. Business, creativity,
          and community are being reimagined for a more sustainable and inclusive future.</Text>
        </Box>
      </Box>
      <Box bg='red.50' height='450px' w='100%'pt='12%'>
        <Box w='35%' ml='50%'>
          <Text color='gray.500' mb='30px'>FEATURED</Text>
          <Text fontWeight='600' fontSize='20px' mb='20px'>January 20th Town Hall </Text>
          <Text textAlign='justify' color='gray.600' mb='20px'>Happy NEAR Year! Join us for an exciting 2022 kick-off.
          Meet the new Foundation CEO and hear about exciting updates in the Ecosystem.</Text>
          <Link color='blue'>Register Today</Link>
        </Box>
      </Box>
    </SimpleGrid>
    <Box bgImage="url('https://near.org/wp-content/uploads/2021/10/CITY_02-768x267.jpg')" w='100%' h='300px;'bgRepeat='no-repeat' bgSize='cover'>

    </Box>

    </Box>
  )
}
export default Feature

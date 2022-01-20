import { Box, Grid, SimpleGrid, GridItem, Text, Link, Image, Button, Center } from '@chakra-ui/react'
import { BiCodeAlt } from "react-icons/fa"
import { useState, useEffect,React } from 'react'

const Content3 =() =>{
  return(
    <Box>
      <SimpleGrid columns={[1, null, 4]} spacing='20px'm='10px' w='90%'ml='5%'>

        <Box height='400px' p='10px'>
          <Text fontSize='30px'fontWeight='600' mb='10px'mt='2%'>Create an account & choose a path</Text>
          <Text mb='30px' fontSize='15px'>The best way to stake your claim in the NEARverse
          is by creating an account (wallet). Then, choose the first step in your journey.</Text>
          <Center>
          <Button size='lg'  bgColor='black' color='white' _hover={{color:'black', bgColor:'white'}} borderRadius='90' >
          Create an Account</Button></Center>
        </Box>
        <Box height='400px'p='10px'>
          <Image src='https://lh3.googleusercontent.com/e5K_7S3K1_BWqYgSHK-TUXndmz16Efz3sg4ekUYOkmKxWOe0E12iNZ1bymg5_-A2lvhxDWbaMI2JpBhixcGR9DT6lca9POySZpCJbBLJ' w='40px' mt='10px'/>
          <Text fontSize='35px'fontWeight='500' mb='10px'mt='2%'>Build</Text>
          <Text mb='45px' fontSize='15px'> Build decentralized apps on a developer-friendly
          platform that features low fees, high speeds, and infinite scalability.</Text>
          <Center>
          <Button size='lg'  bgColor='white' color='black' _hover={{color:'white', bgColor:'black'}} borderRadius='90'variant='outline'>
          I’m a Developer</Button></Center>
        </Box>
        <Box height='400px'p='10px'>
          <Image src='https://lh3.googleusercontent.com/Tpj1rVUWhI2tbokT-SXH0DMac3kJNKFDXidDLWARBGtfLhCx-_Gkk8_XAgyJ_vTxjOjgwb9I_l4VTO9x8xcAzqHxkj56BqKhUaFmRpQP' w='40px' mt='10px'/>
          <Text fontSize='35px'fontWeight='500' mb='10px'mt='2%'>Grow</Text>
          <Text mb='30px' fontSize='15px'> Startup or grow up on a platform that sets you up
          for success. Investors, partners, and users are waiting.</Text>
          <Center>
          <Button size='lg'  bgColor='white' color='black' _hover={{color:'white', bgColor:'black'}} borderRadius='90'variant='outline'>
          I’m a Founder/Creator</Button></Center>
        </Box>
        <Box height='400px'p='10px'>
          <Image src='https://lh3.googleusercontent.com/pV6ieIAZhajVw9z221uVTdvAwjZ7Mj4Sb3sOF54L6giymRV9tw4U2qexL7cyDiUshClNfA73chtvREj-IK99_Iwsotb5iWW444xhdydSfQ' w='40px' mt='10px'/>
          <Text fontSize='35px'fontWeight='500' mb='10px'mt='2%'>Belong</Text>
          <Text mb='45px' fontSize='15px'>When you find your purpose, you find your people.
          Pick a wallet, create an account, and start contributing today.</Text>
          <Center>
          <Button size='lg'  bgColor='white' color='black' _hover={{color:'white', bgColor:'black'}} borderRadius='90'variant='outline'>
          Explore Community</Button></Center>
        </Box>
</SimpleGrid>


    </Box>
  )
}
export default Content3

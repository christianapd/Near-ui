import { Box, Grid, SimpleGrid, GridItem, Text, Link, Image, Input, Button,VStack,HStack, Divider,Center } from '@chakra-ui/react'
import { useState, useEffect,React } from 'react'
import { AiTwotoneMessage,AiOutlineTwitter,AiOutlineGithub,AiOutlineWechat,AiFillYoutube } from 'react-icons/ai';
import { SiDiscord,SiTelegram } from 'react-icons/si';

const Footer =() =>{
  return(
    <Box>
    <SimpleGrid columns={[1, null, 6]} spacing='10px'mr='3%' ml='3%'mt='70px'>
      <Box height='300px'p='20px'>
        <VStack align='right'>
          <Link> <Image h='20px'src='https://vitalpoint.ai/wp-content/uploads/2020/06/near_logo-1.png' alt='near_logo' /></Link>
          <Link color='gray.600' _hover={{color:'black', transition:'0.3s'}}>Wallet</Link>
          <Link color='gray.600' _hover={{color:'black', transition:'0.3s'}}> Explorer</Link>
          <Link color='gray.600' _hover={{color:'black', transition:'0.3s'}}>ETH ↔ NEAR Bridge</Link>
          <Link color='gray.600' _hover={{color:'black', transition:'0.3s'}}>Brand Toolkit</Link>
        </VStack>
      </Box>
      <Box height='300px'p='20px'>
        <VStack align='right'>
          <Link fontSize='20px' fontWeight='500'>Learn</Link>
          <Link color='gray.600' _hover={{color:'black', transition:'0.3s'}}>Platform</Link>
          <Link color='gray.600' _hover={{color:'black', transition:'0.3s'}}>Blog</Link>
          <Link color='gray.600' _hover={{color:'black', transition:'0.3s'}} >Technology</Link>
          <Link color='gray.600' _hover={{color:'black', transition:'0.3s'}}>Use Cases</Link>
          <Link color='gray.600' _hover={{color:'black', transition:'0.3s'}}>Education</Link>
          <Link color='gray.600' _hover={{color:'black', transition:'0.3s'}}>About</Link>
          <Link color='gray.600' _hover={{color:'black', transition:'0.3s'}}>Careers</Link>
        </VStack>
      </Box>

      <Box height='300px'p='20px'>
        <VStack align='right'>
          <Link fontSize='20px' fontWeight='500'>Build</Link>
          <Link color='gray.600' _hover={{color:'black', transition:'0.3s'}}>Documentation ↗</Link>
          <Link color='gray.600' _hover={{color:'black', transition:'0.3s'}}>Platform</Link>
          <Link color='gray.600' _hover={{color:'black', transition:'0.3s'}}>Office Hours</Link>
          <Link color='gray.600' _hover={{color:'black', transition:'0.3s'}}>Examples</Link>
          <Link color='gray.600' _hover={{color:'black', transition:'0.3s'}}>Bounties</Link>
          <Link color='gray.600' _hover={{color:'black', transition:'0.3s'}}>Security Report</Link>

        </VStack>
      </Box>
      <Box height='300px'p='20px'>
        <VStack align='right'>
          <Link fontSize='20px' fontWeight='500'>Grow</Link>
          <Link color='gray.600' _hover={{color:'black', transition:'0.3s'}}>Work with Us</Link>
          <Link color='gray.600' _hover={{color:'black', transition:'0.3s'}}>Grants & Funding</Link>
          <Link color='gray.600' _hover={{color:'black', transition:'0.3s'}}>Join the Accelerator</Link>
        </VStack>
      </Box>
      <Box  height='300px'p='20px'>
        <VStack align='right'>
          <Link fontSize='20px' fontWeight='500'>Belong</Link>
          <Link color='gray.600' _hover={{color:'black', transition:'0.3s'}}>Open Web Sandbox</Link>
          <Link color='gray.600' _hover={{color:'black', transition:'0.3s'}}>Guilds</Link>
          <Link color='gray.600' _hover={{color:'black', transition:'0.3s'}}>DAOs</Link>
          <Link color='gray.600' _hover={{color:'black', transition:'0.3s'}}>Events ↗</Link>
          <Link color='gray.600' _hover={{color:'black', transition:'0.3s'}}>Community Blog ↗</Link>

        </VStack>
      </Box>
      <Box height='300px'p='20px'>
        <VStack align='right'>
          <Link fontSize='20px' fontWeight='500'>Choose a Path</Link>
          <Link color='gray.600' _hover={{color:'black', transition:'0.3s'}}>Developer Path</Link>
          <Link color='gray.600' _hover={{color:'black', transition:'0.3s'}}>Founder Path</Link>
          <Link color='gray.600' _hover={{color:'black', transition:'0.3s'}}>Community Path</Link>
        </VStack>
      </Box>

    </SimpleGrid>
    <Center>
      <HStack spacing='25px'mb='30px'>
        <Link fontSize='30px' color='gray.300'_hover={{color:'Gray', transition:'0.3s'}}><AiTwotoneMessage/></Link>
        <Link fontSize='30px' color='gray.300' _hover={{color:'Gray', transition:'0.3s'}}><AiOutlineTwitter/></Link>
        <Link fontSize='30px' color='gray.300' _hover={{color:'Gray', transition:'0.3s'}}><AiOutlineGithub/></Link>
        <Link fontSize='30px' color='gray.300' _hover={{color:'Gray', transition:'0.3s'}}> <SiDiscord/></Link>
        <Link fontSize='30px' color='gray.300' _hover={{color:'Gray', transition:'0.3s'}}><SiTelegram/></Link>
        <Link fontSize='30px' color='gray.300' _hover={{color:'Gray', transition:'0.3s'}}><AiOutlineWechat/></Link>
        <Link fontSize='30px' color='gray.300' _hover={{color:'Gray', transition:'0.3s'}}><AiFillYoutube/></Link>
      </HStack>
    </Center>
    <Center>
    <HStack spacing='20px'mb='100px'>
      <Text color='gray.300'>2022 NEAR Protocol</Text>
      <Divider orientation='vertical'height='30px' size='xl' />
      <Link color='gray.300'_hover={{color:'Gray' , transition:'0.3s'}}>hello@near.foundation</Link>
      <Divider orientation='vertical'height='30px' />
      <Link color='gray.300'_hover={{color:'Gray' , transition:'0.3s'}}>Privacy Policy</Link>
    </HStack>
    </Center>
    </Box>
  )
}
export default Footer

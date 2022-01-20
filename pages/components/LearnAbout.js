import { Box, Grid, SimpleGrid, GridItem, Text, Link, Image, VStack } from '@chakra-ui/react'
import { useState, useEffect,React } from 'react'

const LearnAbout =() =>{
  return(
    <Box mb='50px'>
    <SimpleGrid columns={[1, null, 2]} >
      <Box height='450px' p='70px'pr='0' >
        <Box p='10px' b='0'>
          <Text fontSize='35px'fontWeight='500' mb='10px'mt='100px'>Foundation for Creation</Text>
          <Text textAlign='justify'mb='30px'>The Creator Economy requires robust infrastructure
          including a set of intuitive developer tools, and an engaged, decentralized community.
          </Text>
          <Link color='blue' mt='50px'>Learn about the Creator Economy on NEAR</Link>
        </Box>
      </Box>
      <Box  height='450px' pt='90px' align='center'>
        <Box >
          <Image src='https://near.org/wp-content/uploads/2021/10/foundation-1.png' h='400px' mt='30px'/>
        </Box>
      </Box>
    </SimpleGrid>

    <SimpleGrid columns={[1, null, 2]} >
      <Box height='450px' p='70px'pr='0' >
        <Box p='10px' b='0'>
          <Text fontSize='35px'fontWeight='500' mb='10px'mt='100px'>Solutions for Scaling</Text>
          <Text textAlign='justify'mb='30px'>NEAR is eliminating the barriers to Web 3 adoption. With high speeds, low fees,
          and progressive UX, NEAR’s climate-neutral blockchain is ready for explosive growth.
          </Text>
          <Link color='blue' mt='50px'>Follow progress on sharding</Link>
        </Box>
      </Box>
      <Box  height='450px' pt='90px' align='center'>
        <Box >
          <Image src='https://near.org/wp-content/uploads/2021/10/scaling-2.png' h='400px' mt='30px'/>
        </Box>
      </Box>
    </SimpleGrid>

    <SimpleGrid columns={[1, null, 2]} >
      <Box height='450px' p='70px'pr='0' >
        <Box p='10px' b='0'>
          <Text fontSize='35px'fontWeight='500' mb='10px'mt='100px'>For a multi-chain future</Text>
          <Text textAlign='justify'mb='30px'>NEAR runs in concert with Ethereum, Polkadot, Cosmos, and more,
          allowing for the free flow of assets and communication between networks for the betterment of all.
          </Text>
          <Link color='blue' mt='50px'>Aurora: Ethereum Bridge & EVM</Link><br/><br/>
          <Link color='blue' mt='50px'>Octopus Network: App Chain Interoperability</Link>
        </Box>
      </Box>
      <Box  height='450px' pt='90px' align='center'>
        <Box >
          <Image src='https://near.org/wp-content/uploads/2021/10/multi-chain-1.png' h='400px' mt='30px'/>
        </Box>
      </Box>
    </SimpleGrid>


    </Box >
  )
}
export default LearnAbout

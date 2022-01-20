import Nav from './components/nav'
import Feature from './components/Feature'
import LearnAbout from './components/LearnAbout'
import CreateAccount from './components/CreateAccount'
import Email from './components/Email'
import Footer from './components/Footer'
import { Box } from '@chakra-ui/react'


export default function Home() {
  return (
    <Box>
      <Box zIndex='2'  sx={{ position: '-webkit-sticky', /* Safari */ position: 'sticky', top: '0', }}><Nav/></Box>
      <Feature/>
      <LearnAbout/>
      <CreateAccount/>
      <Email/>
      <Footer/>
    </Box>
  )
}

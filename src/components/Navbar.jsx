import { Box } from '../styleds/BoxStyled'
import Menu from './Menu'

const MunuName = ['Features','Team','Sign in']

const Navbar = () => {
  return (
    <Box>
      <h1> Fylo</h1>
        {
          MunuName.map((item,index) => <Menu name={item} key={index} />)
        }
    </Box>
  )
}

export default Navbar
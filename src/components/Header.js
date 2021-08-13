import { useHistory } from 'react-router'
import logo from '../assets/imgs/logo.svg'
const Header = () => {
  const history = useHistory()
  return (
    <div className='header'>
      <div onClick={() => history.push('/')} className='logo'>
        <img src={logo} width="150px" alt="algolia" />
      </div>
    </div>
  )
}

export default Header
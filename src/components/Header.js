import logo from '../assets/imgs/logo.svg'
const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={logo} width="150px" alt="algolia" />
      </div>
    </div>
  )
}

export default Header
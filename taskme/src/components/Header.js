const Header = (props) => {
  return (
    <header>
      <h1>Welcome to {props.title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: 'T-List',
}

export default Header

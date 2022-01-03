import PropTypes from 'prop-types'
import Button from './Button'


const Header = () => {
  const onClick = () => {
    console.log('click')
  }

  return (
    <header className='header'>
      <h1>Welcome to Taskme</h1>
      <Button color='green' text='Add' onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header

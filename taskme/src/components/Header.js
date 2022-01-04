import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title, onAdd, showAdd }) => {

  return (
    <header className='header'>
      <h1>Welcome to Taskme</h1>
      <Button
      color={showAdd ? '#4C5B5C' : '#DB5461'}
      text={showAdd ? 'Close' : 'Add'}
      onClick={onAdd} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Taskme',
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header

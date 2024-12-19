/****** react library ******/
import PropTypes from "prop-types"

const NavBar = ({ activePage }) => {
  return (
    <>
      <div className='nav-bar'>
        <h2>{activePage}</h2>
      </div><hr/>
    </>
  )
}

NavBar.propTypes = {
  activePage: PropTypes.string.isRequired,
};

export default NavBar

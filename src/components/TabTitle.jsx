import PropTypes from 'prop-types';

function TabTitle ({ title }) {
  return (
    <div className="tab-title">
      <div className="tab-title__label">
        {title}
      </div>
    </div>
  )
}

TabTitle.propTypes = {
  title: PropTypes.string
}

export default TabTitle

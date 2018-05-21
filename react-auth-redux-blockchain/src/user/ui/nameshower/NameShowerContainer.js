import { connect } from 'react-redux'
import NameShower from './NameShower'
import { updateUser } from './NameShowerActions'

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    surname: state.user.data.surname
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onProfileFormSubmit: (surname) => {
      event.preventDefault();

      dispatch(updateUser(surname))
    }
  }
}

const NameShowerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NameShower)

export default NameShowerContainer
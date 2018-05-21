import { connect } from 'react-redux'
import AgeForm from './AgeForm'
import { updateUser } from './AgeFormActions'

const mapStateToProps = (state, ownProps) => {
  console.log("fetching user data...")
  console.log(state);
  return {
    name: state.user.data.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onProfileFormSubmit: (name) => {
      event.preventDefault();

      dispatch(updateUser(name))
    }
  }
}

const AgeFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AgeForm)

export default AgeFormContainer

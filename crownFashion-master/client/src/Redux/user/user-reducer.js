import { userActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  isLoading: false,
};

const userReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_IN_SUCCESS:
    case userActionTypes.SIGN_UP_SUCCESS:
      return {
        ...currentState,
        currentUser: action.payload,
        error: null,
        isLoading: false,
      };
    case userActionTypes.EMAIL_SIGN_IN_START:
    case userActionTypes.GOOGLE_SIGN_IN_START:
    case userActionTypes.SIGN_OUT_START:
    case userActionTypes.SIGN_UP_START: {
      console.log('signout from reducer was called');
      return {
        ...currentState,
        isLoading: true,
      };
    }

    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...currentState,
        currentUser: null,
        error: null,
        isLoading: false,
      };
    case userActionTypes.SIGN_IN_FAILURE:
    case userActionTypes.SIGN_OUT_FAILURE:
    case userActionTypes.SIGN_UP_FAILURE:
      return {
        ...currentState,
        error: action.payload,
        isLoading: false,
      };
    default:
      return currentState;
  }
};

export default userReducer;

// 인증 관련 액션
const SIGNIN_SUCCESS = "SIGNIN_SUCCESS" as const
const SIGNIN_FAIL = "SIGNIN_FAIL" as const
const SIGNOUT = "SIGNOUT" as const

// 액션 생성 함수
export const signSuccess = () => ({type: SIGNIN_SUCCESS}) 
export const signFail = () => ({type: SIGNIN_FAIL})
export const signOut = () => ({type: SIGNOUT})

// action object에 대한 타입
type AuthActions =
  | ReturnType<typeof signSuccess>
  | ReturnType<typeof signFail>
  | ReturnType<typeof signOut>;

// state 타입 정의
type stateTypes = {
  success: boolean;
}

// initial state
const initialState:stateTypes = {
  success: false
}

// reducer
function authReducer (state:stateTypes = initialState, action: AuthActions) {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      return {...state, success: true };
    case SIGNIN_FAIL:
      return {...state, success: false };
    case SIGNOUT: 
      return {...state, success: false };
    default:
      return state;
  }
}

export default authReducer;
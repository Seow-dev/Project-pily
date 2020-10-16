import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import {RootState} from './index'


// 인증 관련 액션
const SIGNIN_PEND = "SIGNIN_PEND" as const;
const SIGNIN_SUCCESS = "SIGNIN_SUCCESS" as const;
const SIGNIN_FAIL = "SIGNIN_FAIL" as const;
const SIGNOUT = "SIGNOUT" as const;


// 소셜 로그인이 성공 했을 경우 -> signin_success 상태로 변경
// 소셜 로그인 버튼 눌렀을 때 -> dispatch(signIn) 동작 
export const signIn = ():ThunkAction<void,RootState,{}, AnyAction>  => async dispatch => {
  dispatch({type: SIGNIN_PEND})

  try {
    // signInApi 호출 -> const result = await signInApi();
    // error 코드나 데이터 가져오는 것이 실패하면 fail
  } catch(error) {
    return dispatch({
      type: SIGNIN_FAIL
    })
  }
}
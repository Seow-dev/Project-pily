import { combineReducers } from 'redux';
import authReducer from './auth'

// 스토어를 생성하는 메인 리듀서
const rootReducer = combineReducers({
  authReducer
});

export default rootReducer

// useSelector로 상태값을 조회할 때 사용하는 type정보.
export type RootState = ReturnType<typeof rootReducer>;
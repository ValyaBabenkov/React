import { userActions, userReducer } from 'entities/User/model/slice/userSlice';
import { getUserState } from './model/selectors/getUserState/getUserState';
import type { UserSchema, User } from './model/types/userSchema';

export {
    userReducer, userActions, UserSchema, User,
    getUserState,
};

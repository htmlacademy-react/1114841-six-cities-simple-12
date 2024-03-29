import { NameSpace } from '../../common/const';
import {State} from '../../types/state';
import { AuthorizationStatus } from '../../common/const';
import { UserData } from '../../types/user-data';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;

export const getUserData = (state: State): UserData | null => state[NameSpace.User].userData;

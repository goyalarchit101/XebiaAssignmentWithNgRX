import * as fromReducer from './auth.reducer';
import * as fromActions from '../actions/auth.actions';

describe('Store > Reducers > AuthReducer', () => {
  afterEach(() => {
    fromReducer.initialState.isAuthenticated = null;
    fromReducer.initialState.error = null;
    fromReducer.initialState.user = null;
  });

  it('SHOULD return the default state', () => {
    const { initialState } = fromReducer;
    const state = fromReducer.reducer(undefined, { type: null });

    expect(state).toBe(initialState);
  });

  it('Login Success data', () => {
    const { initialState } = fromReducer;
    const payload: any = { email: 'MTN_user@mckinsey.com', password: 'MTN281#^@*' };
    const action = new fromActions.LoginSuccess(payload);
    const state = fromReducer.reducer(initialState, action);

    expect(state.user).toEqual(payload);
  });

  it('Login Failure data', () => {
    const { initialState } = fromReducer;
    const payload: any = 'Invalid User/Password';
    const action = new fromActions.LoginFailure(payload);
    const state = fromReducer.reducer(initialState, action);

    expect(state.error).toEqual(payload);
  });

  it('LogOut state ', () => {
    const { initialState } = fromReducer;
    const action = new fromActions.Logout();
    const state = fromReducer.reducer(initialState, action);

    expect(state).toEqual(initialState);
  });
});

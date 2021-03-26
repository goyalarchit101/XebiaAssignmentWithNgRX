import * as Actions from './auth.actions';

describe('Store > Actions > AuthActions', () => {
  it('SHOULD create a Login action', () => {
    const payload = {};
    const action = new Actions.Login(payload);
    expect({ ...action }).toEqual({
        type: Actions.AuthActionTypes.LOGIN,
        payload
    });
  });

  it('SHOULD create a Login success action containing a payload', () => {
    const payload = { username: 'MTN_user@mckinsey.com', password: 'MTN281#^@*' };
    const action = new Actions.LoginSuccess(payload);

    expect({ ...action }).toEqual({
      type: Actions.AuthActionTypes.LOGIN_SUCCESS,
      payload
    });
  });

  it('SHOULD create a Login failure action containing a payload', () => {
    const payload = {};
    const action = new Actions.LoginFailure(payload);

    expect({ ...action }).toEqual({
      type: Actions.AuthActionTypes.LOGIN_ERROR,
      payload
    });
  });

  it('SHOULD create a LogOut action containing a payload', () => {
    const action = new Actions.Logout();
    expect({ ...action }).toEqual({ type: Actions.AuthActionTypes.LOGOUT });
  });

});

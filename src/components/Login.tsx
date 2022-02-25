import { useEffect, useReducer } from 'react';

interface AuthState {
  validate: boolean;
  token: string | null;
  userName: string;
  name: string;
}

const initialState: AuthState = {
  validate: true,
  token: null,
  userName: '',
  name: '',
};

type LoginPayload = {
  userName: string;
  name: string;
};

type AuthAction = { type: 'logout' } | { type: 'login'; payload: LoginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'logout':
      return {
        validate: false,
        token: null,
        userName: '',
        name: '',
      };
    case 'login':
      const { userName, name } = action.payload;
      return {
        validate: false,
        token: 'ABC123',
        userName,
        name,
      };
    default:
      return state;
  }
};

export const Login = () => {
  const [{ validate, token, userName }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'logout' });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({
      type: 'login',
      payload: { userName: 'foo', name: 'bar' },
    });
  };

  const logout = () => {
    dispatch({
      type: 'logout',
    });
  };

  if (validate) {
    return (
      <>
        <div className="alert alert-info">Validation...</div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>
      {token ? (
        <div className="alert alert-success">AUTHENTICATED: {userName} </div>
      ) : (
        <div className="alert alert-danger">Error! NOT AUTHENTICATED</div>
      )}
      {token ? (
        <button className="btn btn-danger" onClick={() => logout()}>
          Logout
        </button>
      ) : (
        <button className="btn btn-primary" onClick={() => login()}>
          Login
        </button>
      )}
    </>
  );
};

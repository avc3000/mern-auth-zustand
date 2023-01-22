import { loginRequest, profileRequest } from '../api/auth';
import { useAuthStore } from '../store/auth';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

  const setToken = useAuthStore(state => state.setToken);
  const setProfile = useAuthStore(state => state.setProfile);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = (event.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value;

    const resLogin = await loginRequest(email, password);
    setToken(resLogin.data.token);

    const resProfile = await profileRequest();
    setProfile(resProfile.data.profile);

    navigate('/profile');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form'>
        <input type="email" placeholder="email@mail.com" className='text' />
        <input type="password" placeholder="******" className='text' />
        <button className='button'>Login</button>
      </div>
    </form>
  );
}

export default LoginPage;
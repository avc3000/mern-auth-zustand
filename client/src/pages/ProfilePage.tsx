import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth';

function ProfilePage() {
  const logout = useAuthStore(state => state.logout);
  const profile = useAuthStore(state => state.profile);
  const navigate = useNavigate();

  return (
    <div className='profile'>
      <div className='text-profile'>Profile: </div>
      <div className='text-profile'>Welcome Mr. {profile.test}</div>
      <div>
        <button className='button' onClick={() => { logout(); navigate('/login'); } }>Logout</button>
      </div>
    </div>
  )
}

export default ProfilePage;
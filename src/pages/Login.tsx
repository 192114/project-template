import {useNavigate} from 'react-router-dom'
import Loading from '../components/Loading'

function Login() {
  const navigate = useNavigate()
  return (
    <div>
      <a href="##">dsfasdfsad</a>

      <button type="button" onClick={() => navigate('/')}>登录</button>

      <Loading />
    </div>
  )
}

export default Login

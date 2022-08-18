import {useNavigate} from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  return (
    <div>
      <a href="##">dsfasdfsad</a>

      <button type="button" onClick={() => navigate('/')}>登录</button>
    </div>
  )
}

export default Login

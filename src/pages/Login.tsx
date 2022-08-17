import {useNavigate} from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  return (
    <div>
      <img src="/public/method-draw-image.svg" alt="" />

      <button type="button" onClick={() => navigate('/')}>登录</button>
    </div>
  )
}

export default Login

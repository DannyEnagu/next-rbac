
'use client'
import LoginForm from '@/component/dashboard/forms/LoginForm'

function Login() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <div className='mt-20'>
        <h1 className="text-3xl font-bold underline mb-8 text-center">Login</h1>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
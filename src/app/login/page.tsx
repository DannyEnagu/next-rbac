
'use client'
import LoginForm from '@/component/dashboard/forms/LoginForm'

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-3xl font-bold underline mb-8">Login</h1>
        <LoginForm />
    </div>
  )
}

export default Login
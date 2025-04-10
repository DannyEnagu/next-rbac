import RegisterForm from "@/component/dashboard/forms/RegisterForm"

function Register() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <div className='mt-20 text-center'>
        <h1 className="text-3xl font-bold underline mb-8 text-center">Register</h1>
        <RegisterForm role={'CUSTOMER'} />
      </div>
    </div>
  )
}

export default Register
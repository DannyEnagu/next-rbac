import RegisterForm from "@/component/dashboard/forms/RegisterForm"

function Register() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-3xl font-bold underline mb-8">Register</h1>
        <RegisterForm role={'CUSTOMER'} />
    </div>
  )
}

export default Register
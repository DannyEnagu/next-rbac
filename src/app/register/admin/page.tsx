import RegisterForm from "@/component/dashboard/forms/RegisterForm";

export default function RegisterAdmin() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <div className='mt-20'>
        <h1 className="text-3xl font-bold underline mb-8 text-center">Register Admin</h1>
        <RegisterForm role={'ADMIN'} />
      </div>
    </div>
  );
}
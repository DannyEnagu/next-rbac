import RegisterForm from "@/component/dashboard/forms/RegisterForm";

export default function RegisterAdmin() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold underline mb-8">Register Admin</h1>
      <RegisterForm role={'ADMIN'} />
    </div>
  );
}
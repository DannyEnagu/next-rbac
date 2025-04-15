import Link from "next/link";
import { Button } from "primereact/button";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold uppercase text-center mt-8 mb-4">
        Hello! Welcome to E-com/SaaS RBAC
      </h1>
      <p className="text-lg">
        Welcome to the E-com/SaaS RBAC application. This is a sample application to demonstrate the use of RBAC (Role-Based Access Control) in a web application. The application is built using Next.js, TypeScript, and Tailwind CSS.
        <br />
        <br />
        The application is built using Next.js, TypeScript, and Tailwind CSS. Next.js is a React framework that allows for server-side rendering and static site generation. TypeScript is a superset of JavaScript that adds static typing to the language. Tailwind CSS is a utility-first CSS framework that allows for rapid UI development.
        <br />
        <br />
        <div className="flex items-center gap-2 mt-8">
          <Link href="/dashboard">
            <Button label="Go to Dashboard" icon="pi pi-arrow-right" className="p-button-info" />
          </Link>
          <Link href="/login">
            <Button label="Go to Login" icon="pi pi-arrow-right" className="p-button-warning" />
          </Link>
          <Link href="/register">
            <Button label="Go to Register" icon="pi pi-arrow-right" className="p-button-danger" />
          </Link>
          <Link href="/register/admin">
            <Button label="Go to Register Admin" icon="pi pi-arrow-right" className="p-button-secondary" />
          </Link>
        </div>
      </p>
    </div>
  );
}

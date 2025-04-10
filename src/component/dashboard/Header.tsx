'use client'
import { useRef } from "react";
import { clearCookies } from "@/lib/actions";
import useAuthStore from "@/store/auth-store"
import { useRouter } from "next/navigation";
import { Button } from "primereact/button"
import { Toast } from "primereact/toast";

const Header = () => {
    const { clearUser } = useAuthStore();
    const toast = useRef<Toast>(null);
    const router = useRouter()

    const goToDashboard =  () => {
        router.push('/dashboard')
    }

    const handleLogout = async () => {
        await clearCookies('token')
        clearUser()
        toast.current?.show({
            severity: 'error',
            summary: 'Error',
            detail: 'Logout Successful!',
            life: 4000
        })
        router.push('/')
    }
    return (<header className="h-[56px] sticky top-0 border-b border-[#ffffff0d] flex items-center justify-between p-2 pr-8">
        <Button label="Dashboard" icon="pi pi-objects-column" size="large" severity="danger" text onClick={goToDashboard} />
        <Button label="Logout" size="small" className="p-button-danger" onClick={handleLogout} />
    </header>)
}

export default Header
"use client";

import useAuthStore from "@/store/auth-store";


const SideMenu = () => {
    const { user } = useAuthStore()
    return (<aside className="bg-[#171717]">
        <div className="h-[56px]" />
        <nav className="p-4">
            <p>Hello  {user?.name}</p>
        </nav>
    </aside>)
}

export default SideMenu;
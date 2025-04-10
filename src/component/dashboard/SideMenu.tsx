"use client";

import { Menu } from 'primereact/menu';
import useAuthStore from "@/store/auth-store";
import { Avatar } from 'primereact/avatar';
import { useRouter } from 'next/navigation';

const SideMenu = () => {
    const { user, hasPermission } = useAuthStore();
    const router = useRouter()

    const links = [
        {
            label: 'Users',
            icon: 'pi pi-users',
            visible: hasPermission('Management.Manager.View.User'),
            command: () => {
                router.push('/dashboard/users')
            }
        },
        {
            label: 'Products',
            icon: 'pi pi-box',
            visible: hasPermission('System.Base.View.Product'),
            command: () => {
                router.push('/dashboard/products')
            }
        },
        { 
            label: 'Reports',
            icon: 'pi pi-receipt',
            visible: hasPermission('Sales.SalesRep.View.Report'),
            command: () => {}
        },
        { 
            label: 'Tickets',
            icon: 'pi pi-exclamation-triangle',
            visible: hasPermission('Support.SupportStaff.View.Ticket'),
            command: () => {}
        },
        {
            label: 'Sales History',
            icon: 'pi pi-list-check',
            visible: hasPermission('Sales.SalesRep.View.History'),
            command: () => {}
        },
        {
            label: 'Orders',
            icon: 'pi pi-shopping-bag',
            visible: hasPermission('Sales.SalesRep.View.Order'),
            command: () => {}
        },
        {
            label: 'Permissions',
            icon: 'pi pi-shield',
            visible: hasPermission('System.Admin.View.Permission'),
            command: () => {}
        },
        {
            label: 'Profile',
            icon: 'pi pi-user',
            command: () => {}
        },
        { 
            label: 'System Settings',
            icon: 'pi pi-sliders-h',
            visible: hasPermission('System.Admin.View.Settings'),
            command: () => {}
        }
    ];

    return (<aside className="bg-[#171717]">
        <div className="h-[56px]" />
        <nav className="p-4">
            <div className='flex flex-col items-center gap-4 mb-8'>
                <Avatar label={user?.name.charAt(0)} size="xlarge" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
                <p className='font-bold'>
                    Hello!  {user?.role === 'CUSTOMER'
                    ? user?.name
                    : `${user?.role.charAt(0).toUpperCase() + "" + user?.role.slice(1, user.role.length).toLowerCase()} ${user?.name}`
                    }
                </p>
            </div>

            <div>
                <Menu model={links} pt={{
                    root: { className: "p-2" },
                    action: { className: "flex items-center gap-4 p-2" }
                }} unstyled />
            </div>
        </nav>
    </aside>)
}

export default SideMenu;
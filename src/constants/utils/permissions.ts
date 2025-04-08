// permissions.ts  
const permissions = {  
    "users.view": "View Users",  
    "users.create": "Create Users",  
    "users.edit": "Edit Users",  
    "users.delete": "Delete Users",  
    "products.view": "View Products",  
    "products.create": "Create Products",  
    "products.edit": "Edit Products",  
    "products.delete": "Delete Products",  
    "reports.view": "View Reports",  
    "profile.view": "View Profile",  
    "profile.edit": "Edit Profile",  
    "tickets.view": "View Tickets",  
    "tickets.create": "Create Tickets",  
    "tickets.edit": "Edit Tickets",  
    "tickets.delete": "Delete Tickets",  
    "salesHistory.view": "View Sales History",  
    "orders.view": "View Orders",  
    "orders.edit": "Edit Orders",  
    "permissions.view": "View Permissions",  
    "permissions.edit": "Edit Permissions",  
    "systemSettings.view": "View System Settings",  
    "systemSettings.edit": "Edit System Settings",  
} as const; // Using "as const" for type safety  
  
export default permissions;  

// Utility type to extract permission keys  
export type PermissionKey = keyof typeof permissions;
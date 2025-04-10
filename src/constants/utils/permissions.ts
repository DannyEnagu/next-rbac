// permissions.ts  
const permissions = {  
    "Management.Manager.View.User": "View Users",  
    "System.Admin.Create.User": "Create Users",  
    "users.edit": "Edit Users",  
    "users.delete": "Delete Users",  
    "System.Base.View.Product": "View Products",  
    "products.create": "Create Products",  
    "products.edit": "Edit Products",  
    "products.delete": "Delete Products",  
    "Sales.SalesRep.View.Report": "View Reports",  
    "profile.view": "View Profile",  
    "profile.edit": "Edit Profile",  
    "Support.SupportStaff.View.Ticket": "View Tickets",  
    "tickets.create": "Create Tickets",  
    "tickets.edit": "Edit Tickets",  
    "tickets.delete": "Delete Tickets",  
    "Sales.SalesRep.View.History": "View Sales History",  
    "Sales.SalesRep.View.Order": "View Orders",  
    "orders.edit": "Edit Orders",  
    "System.Admin.View.Permission": "View Permissions",  
    "permissions.edit": "Edit Permissions",  
    "System.Admin.View.Settings": "View System Settings",  
    "systemSettings.edit": "Edit System Settings",  
} as const; // Using "as const" for type safety  
  
export default permissions;  

// Utility type to extract permission keys  
export type PermissionKey = keyof typeof permissions;
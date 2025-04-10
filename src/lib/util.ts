
// Make sure permission name conforms to the format: [Category].[Role].[Action].[Object]

export const isValidPermissionName = (permissionName: string): boolean => {
  const regex = /^[a-zA-Z]+\.([a-zA-Z]+\.){2}[a-zA-Z]+$/;
  return regex.test(permissionName);
};

export const isAdministrator = (role: string): boolean => {
  console.log(role, 'Testing')
  return role === 'ADMIN';
}
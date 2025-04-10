import useAuthStore from '@/store/auth-store';  
import { PermissionKey } from '@/constants/utils/permissions';

interface WithPermissionProps {  
  requiredPermission: PermissionKey;  
  children?: React.ReactNode;  
}  

function withPermission(WrappedComponent: React.ComponentType<WithPermissionProps>) {  
  const WithPermission = (props: WithPermissionProps) => {  
    const hasPermission = useAuthStore((state) => state.hasPermission);  

    if (!hasPermission(props.requiredPermission)) {  
      return null;  
    }  

    // Permission granted, render the wrapped component  
    return <WrappedComponent {...props} />;  
  };  

  WithPermission.displayName = `WithPermission(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;  
  return WithPermission;  
}  

export default withPermission;  
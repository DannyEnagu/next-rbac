// utils/withPermission.tsx  
import React from 'react';  
import useAuthStore from '@/store/auth-store';  
import { useRouter } from 'next/router';  
import { PermissionKey } from '@/constants/utils/permissions';

interface WithPermissionProps {  
  requiredPermission: PermissionKey;  
  children: React.ReactNode;  
}  

function withPermission(WrappedComponent: React.ComponentType<WithPermissionProps>) {  
  const WithPermission = (props: WithPermissionProps) => {  
    const hasPermission = useAuthStore((state) => state.hasPermission);  
    const router = useRouter();  

    if (!hasPermission(props.requiredPermission)) {  
      // Optionally redirect or render a "Not Authorized" message  
      router.push('/unauthorized'); // Redirect to an unauthorized page  
      return null; // Or return a "Not Authorized" component  
    }  

    // Permission granted, render the wrapped component  
    return <WrappedComponent {...props} />;  
  };  

  WithPermission.displayName = `WithPermission(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;  
  return WithPermission;  
}  

export default withPermission;  
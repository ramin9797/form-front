import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router";
import { userApi } from "src/store/features/UserApi";

type IAuthMiddleware = {
    children: React.ReactElement;
  };

const AuthMiddleware: React.FC<IAuthMiddleware> = ({ children }) => {
      const { isLoading, isFetching } = userApi.endpoints.getMe.useQuery(null, {
        skip: !localStorage.getItem('token'),
        refetchOnMountOrArgChange: true,
      });
    
      const loading = isLoading || isFetching;
    
      const user = userApi.endpoints.getMe.useQueryState(null, {
        selectFromResult: ({ data }) => data,
      });

      const navigate = useNavigate();
      useEffect(()=>{
        if(!loading && !user){
          navigate("/auth/signin")
        }
      },[user,loading])
    
    
      if (loading) {
        return <p>Loading</p>;
      }

      console.log('user',user);

      
  
      return children
  };
  
  export default AuthMiddleware;
import React, { useEffect } from 'react'

const UserDashboard = () => {
    const [user,setUser]=usestate({})

    const userLS= JSON.parse(localStorage.getItem("user"));
    const navigate=useNavigate();
    useEffect(()=>{
        setUser(userLS)
    },[])

    const handleLogOut=()=>{
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        alert("Logout Successfully");
        navigate("/login");
    }
  return (
    <div>
      <h2>{user?.fullName}</h2>
      <h2>{user?.email}</h2>
      <h2>{user?.role}</h2>
      <button >Logout</button>
    </div>
  )
}

export default UserDashboard

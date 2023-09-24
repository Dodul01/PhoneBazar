import { NavLink, Outlet } from "react-router-dom"

const Dashbord = () => {
  return (
    <div className="flex">
      <aside className="border border-solid border-gray-300 flex flex-col p-3 rounded-md">
        <NavLink to='/dashbord'>Profile</NavLink>
        <NavLink to='/dashbord/editProfile'>Edit Profile</NavLink>
        <NavLink to='/dashbord/cart'>Cart</NavLink>
      </aside>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Dashbord

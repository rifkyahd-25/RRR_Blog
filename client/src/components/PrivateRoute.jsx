import { useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router-dom"

export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user)
  return currentUser ? <Outlet /> : <Navigate to="/sign-in" />  // if user is logged in, show the Outlet, else redirect to sign-in page
}

import AdminNav from "../componants/admin/AdminNav"

export const metadata = {
    title: "E-Shop Admin",
    discreption : "E-Shop Admin Dashbord"
}

const AdminLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <AdminNav />
        {children}
    </div>
  )
}

export default AdminLayout
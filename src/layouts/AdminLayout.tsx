import { Outlet } from 'react-router-dom'
import Footer from '../components/sections/footer/Footer'
import Header from '../components/sections/header/Header'

const AdminLayout = () => {
  return (
    <div className='main-layout'>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default AdminLayout
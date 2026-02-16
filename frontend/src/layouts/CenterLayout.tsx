import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className='center-layout'>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default AppLayout
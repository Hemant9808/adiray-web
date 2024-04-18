import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layouts = () => {
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    )
}

export default Layouts;
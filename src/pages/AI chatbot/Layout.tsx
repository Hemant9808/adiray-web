import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Layouts = () => {
    const { t } = useTranslation();
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    )
}

export default Layouts;
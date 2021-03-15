import LeftMenuNavItem from '../LeftMenuNavItem';
import LeftMenuTitle from './leftMenuTitle.js';
import LeftMenuSubTitle from './leftMenuSubTitle.js';

const navigationItems = [
    {
        text: 'Pages',
        fontAwesomeElement: <i className="fas fa-fw fa-folder"></i>,
        href: '"/"'
    },
    {
        text: 'Charts',
        fontAwesomeElement: <i className="fas fa-fw fa-chart-area"></i>,
        href: '"/"'
    },
    {
        text: 'Tables',
        fontAwesomeElement: <i className="fas fa-fw fa-table"></i>,
        href: '"/"'
    }
];

function LeftMenu(props) {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <LeftMenuTitle/>

            <hr className="sidebar-divider my-0" />

            <LeftMenuSubTitle/>

            <hr className="sidebar-divider" />


            <div className="sidebar-heading">Actions</div>

            {navigationItems.map(thisNavigationItem =>
                            <LeftMenuNavItem
                            key={thisNavigationItem.text}
                            text={thisNavigationItem.text}
                            fontAwesomeElement={thisNavigationItem.fontAwesomeElement}
                            href={thisNavigationItem.href}
                        />

                )}

            <hr className="sidebar-divider d-none d-md-block" />
        </ul>
    );
}

export default LeftMenu;
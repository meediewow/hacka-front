import React from 'react';
import Search from '@mui/icons-material/Search';
import MapIcon from '@mui/icons-material/Map';
import PersonOutline from '@mui/icons-material/PersonOutline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useLocation, useNavigate } from 'react-router-dom';

const link = [
    {
        title: 'Поиск',
        path: '/',
        icon: <Search />,
    },
    {
        title: 'На карте',
        path: '/map',
        icon: <MapIcon />,
    },
    {
        title: 'Профиль',
        path: '/profile',
        icon: <PersonOutline />,
    },
];

export const Footer: React.FC = () => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState(0);

    const { pathname } = useLocation();

    React.useEffect(() => {
        const index = link.findIndex((item) => item.path === pathname);
        setValue(index);
    }, [pathname]);

    return (
        <BottomNavigation
            showLabels
            value={value}
            onChange={(_, newValue) => {
                const item = link[newValue];
                navigate(item.path);

                setValue(newValue);
            }}
        >
            {link.map((item, index) => (
                <BottomNavigationAction key={index} label={item.title} icon={item.icon} />
            ))}
        </BottomNavigation>
    );
};

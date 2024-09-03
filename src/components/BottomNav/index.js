import {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import './index.css';

export default function () {
    const myLocation = useLocation()
    const [isShowFooter, setShowFooter] = useState(true)
    const [currentTab, setCurrentTab] = useState('Home')

    const [menu, setMenu] = useState([
    {
        title: 'Home',
        icon: HomeIcon,
        to: '/'
    },
    {
        title: 'Menu_2',
        icon: HomeIcon,
        to: '/'
    },
    {
        title: 'Menu_3',
        icon: HomeIcon,
        to: '/'
    },
    {
        title: 'Menu_3',
        icon: HomeIcon,
        to: '/'
    },
    ])

    useEffect(() => {
        let flag = true
        if(myLocation.pathname) {
            flag = menu.map((item) => {return item.to}).includes(myLocation.pathname)
            setShowFooter(flag)
        } else {
            setShowFooter(true)
        }
    
    }, [myLocation.pathname])

    

}
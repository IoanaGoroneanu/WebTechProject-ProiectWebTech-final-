import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData= [
    {
        title: 'Projects',
        path: '/studentprojects',
        icon: <AiIcons.AiFillProject/>,
        cName: 'nav-text'
    },
    {
        title: 'Grades',
        path: '/teams',
        icon: <AiIcons.AiOutlineTeam/>,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/',
        icon: <AiIcons.AiOutlineLogout/>,
        cName:'nav-text'
    }
]

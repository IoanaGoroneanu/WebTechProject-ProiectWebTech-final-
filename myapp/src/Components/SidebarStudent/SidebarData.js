import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData= [
    {
        title: 'Project',
        path: '/project',
        icon: <AiIcons.AiFillProject/>,
        cName: 'nav-text'
    },
    {
        title: 'Teams',
        path: '/studentteams',
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

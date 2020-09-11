import React from 'react'
import * as RiIcons from "react-icons/ri"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        class: 'nav-text'
    },
    {
        title: 'Search',
        path: '/search',
        icon: <IoIcons.IoMdSearch />,
        class: 'nav-text'
    },
    {
        title: 'My Collection',
        path: '/mycollection',
        icon: <RiIcons.RiCollageFill />,
        class: 'nav-text'
    },
]
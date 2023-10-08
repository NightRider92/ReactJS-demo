import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import UserIcon from '@mui/icons-material/People'
import WeatherIcon from '@mui/icons-material/Cloud'
import SearchIcon from '@mui/icons-material/Search'

export const SidebarData =
    [
        {
            title: "Home",
            icon: <HomeIcon />,
            url: "/"
        },

        {
            title: "Users",
            icon: <UserIcon />,
            url: "/users"
        },

        {
            title: "Weather",
            icon: <WeatherIcon />,
            url: "/weather"
        },

        {
            title: "Search",
            icon: <SearchIcon />,
            url: "/search"
        },
    ]

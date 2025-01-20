'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoMdMenu } from 'react-icons/io'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
// import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { links } from '@/lib/data'
import { blue, grey } from '@mui/material/colors'
import { ThemeProvider } from '@mui/system'
import { createTheme } from '@mui/material/styles'

const Header = () => {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }
  const theme = createTheme()
  const DrawerList = (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: 250,
          backgroundColor: blue[900],
          color: grey[50],
          height: '100%',
        }}
        role="presentation"
        onClick={toggleDrawer(false)}
      >
        <List>
          {links[0].menu.map((menuItem) => (
            <ListItem key={menuItem.name} disablePadding>
              <ListItemButton component="a" href={menuItem.href}>
                {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
                <ListItemText primary={menuItem.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    </ThemeProvider>
  )

  return (
    <nav className="flex items-center justify-between top-3 py-4 relative w-full h-[5rem]">
      {/* Logo Section */}
      <div className="absolute left-4">
        <Link href="/">
          <Image
            src="/icons/logo_light_zone.svg"
            alt="Logo"
            width={80}
            height={80}
            className="cursor-pointer"
          />
        </Link>
      </div>

      {/* Navigation Menu */}
      <div className="hidden md:flex gap-4 mx-auto">
        {links[0].menu.map((menuItem) => (
          <Link key={menuItem.name} href={menuItem.href} className="nav-item">
            {menuItem.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div className="absolute right-4 pr-4 md:hidden">
        <IoMdMenu
          className=" size-11 text-primary-foreground cursor-pointer"
          onClick={toggleDrawer(true)}
        />
      </div>

      {/* Drawer */}
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          fontWeight: 'bold',
        }}
      >
        {DrawerList}
      </Drawer>
    </nav>
  )
}

export default Header

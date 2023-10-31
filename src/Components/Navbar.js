import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    linkItem: {
        textDecoration: "none",
        color: "black",
        letterSpacing: '1px',
        padding: "10px",
        transition: "color 0.3s",
        "&:hover": {
            color: "lightGreen",
        }
    },
}));

const Navbar = () => {
    const classes = useStyles();
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: "white" }}>
            <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Toolbar disableGutters >
                    {/* Websiteview  */}
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        sx={{
                            mr: 5,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 900,
                            letterSpacing: '.2rem',
                            color: 'lightgreen',
                            textDecoration: 'none',
                        }}
                        className={classes.linkLogo}
                    >
                        GoWild
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className={classes.linkBox}>
                        <Link to='/' sx={{ my: 2, display: 'block' }} className={classes.linkItem} >
                            Home
                        </Link>
                        <Link to='/featur' sx={{ my: 2, display: 'block' }} className={classes.linkItem}  >
                            Features
                        </Link>
                        <Link to='/about' sx={{ my: 2, display: 'block' }} className={classes.linkItem}  >
                            About Us
                        </Link>
                        <Link to='/guide' sx={{ my: 2, display: 'block' }} className={classes.linkItem}  >
                            Become a Guide
                        </Link>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} >
                        <div>
                            <Link to="/">
                                <span style={{ marginLeft: '22px' }} >
                                    <FacebookIcon />
                                </span>
                            </Link>
                        </div>
                        <div>
                            <Link to="/about">
                                <span style={{ marginLeft: '22px' }}>
                                    <TwitterIcon />
                                </span>
                            </Link>
                        </div>
                        <div>
                            <Link to="/featur">
                                <span style={{ marginLeft: '22px' }}>
                                    <InstagramIcon />
                                </span>
                            </Link>
                        </div>
                        <div>
                            <Link to="/guide">
                                <span style={{ marginLeft: '22px' }}>
                                    <WhatsAppIcon />
                                </span>
                            </Link>
                        </div>
                    </Box>

                    {/* mobile view */}
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        to="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 900,
                            letterSpacing: '.2rem',
                            color: 'lightgreen',
                            textDecoration: 'none',
                        }}
                    >
                        GoWild
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            // aria-label="account of current user"
                            // aria-controls="menu-appbar"
                            // color="inherit"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon sx={{ marginLeft: '7rem' }} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link to='/' sx={{ my: 2, color: 'white', display: 'block' }} className={classes.linkItem}>Home </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link to='/featur' sx={{ my: 2, color: 'white', display: 'block' }} className={classes.linkItem}>Features </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link to='/about' sx={{ my: 2, color: 'white', display: 'block' }} className={classes.linkItem} >About Us </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link to='/guide' sx={{ my: 2, color: 'white', display: 'block' }} className={classes.linkItem}> Become A Guide</Link>
                            </MenuItem>
                        </Menu>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
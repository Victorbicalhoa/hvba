import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"

const NavBar = () => {

    const StyledToolbar = styled(Toolbar)(()=>({
       display:"flex",
       justifyContent:"space-between"
      }))

  return (
    <>
      <AppBar position="absolute">
        <StyledToolbar>
        <MenuItem>About</MenuItem>
        <MenuItem>Skills</MenuItem>
        <MenuItem>Project</MenuItem>
        </StyledToolbar>
      </AppBar>
    </>
  )
}

export default NavBar

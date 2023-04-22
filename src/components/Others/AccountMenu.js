import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { blue } from "@mui/material/colors";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { Link } from "react-router-dom";
import AlertContext from "../../context/alerts/AlertContext";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import UserContext from "../../context/user/userContext";
import ChatBotContext from "../../context/chatbot/ChatBotContext";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const alertContext = React.useContext(AlertContext);
  const { showAlert } = alertContext;
  const userContext = React.useContext(UserContext);
  const { user,setUserInformation,setUser,setUserProfile,setFitnessDetails } = userContext;
  const chatBotContext =  React.useContext(ChatBotContext);
  const {updateMessages} =  chatBotContext;
  React.useEffect(() => {
    setUserInformation()
  }, [])
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogoutClick = () => {
    localStorage.removeItem("endurefit-token");
    setUser({})
    setUserProfile({})
    setFitnessDetails({
      bmi:0,
      dailyCalorieReq:0,
      bodyFatPercentage:0,
      idealWeight:0
    })
    updateMessages([
      {
        isAi: true,
        message: "Hi there 👋 Got a question? \n I'm here to help 😄",
      }
    ])
    showAlert(true, "Logged Out Successffully");
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="medium"
            sx={{ ml: {lg:2,xs:0} }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar src={user.picture} sx={{ width: 38, height: 38, bgcolor: blue[400] }} ></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Link to="/profile">
          <MenuItem onClick={handleClose}>
            <Avatar src={user.picture} sx={{ bgcolor: blue[400] }} /> Profile
          </MenuItem>
        </Link>

          <Link to="/bookmarks">
            <MenuItem onClick={handleClose}>
                <BookmarksIcon sx={{ color: blue[600], mr: 1 }} /> Bookmarks
            </MenuItem>
          </Link>
          <Link to="/contact">
            <MenuItem onClick={handleClose}>
                <SupportAgentIcon sx={{ color: blue[600], mr: 1 }} /> Contact
            </MenuItem>
          </Link>
        <Divider />
        <Link to="/login" >
        <MenuItem onClick={handleLogoutClick}>
          <ListItemIcon>
            <Logout sx={{ color: blue[600] }} />
          </ListItemIcon>
          Logout
        </MenuItem>
        </Link>
      </Menu>
    </React.Fragment>
  );
}

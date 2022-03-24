import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ProductIcon from "@mui/icons-material/Extension";
import UsersIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";

const LeftMenuItem = ({ id, label, icon, position }) => {
  let defaultIcon = null;
  let path = "/";

  switch (id) {
    case "dashboard":
      defaultIcon = <DashboardIcon />;
      path = "/";
      break;

    case "products":
      defaultIcon = <ProductIcon />;
      path = "/products";
      break;

    case "users":
      defaultIcon = <UsersIcon />;
      path = "/users";
      break;

    case "settings":
      defaultIcon = <SettingsIcon />;
      path = "/settings";
      break;

    default:
      defaultIcon = null;
  }

  const MenuLink = (props) => <Link to={path} {...props} />;

  return (
    <ListItem button component={MenuLink}>
      <ListItemIcon>{defaultIcon}</ListItemIcon>
      <ListItemText primary={label} />
    </ListItem>
  );
};

export default LeftMenuItem;

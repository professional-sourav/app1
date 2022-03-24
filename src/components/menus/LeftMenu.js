import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import LeftMenuItem from "./LeftMenuItem";
import { leftTopMenus } from "../../config/left_menu";

const LeftMenu = () => {
  return (
    <>
      <List>
        {leftTopMenus.map((menu, index) => (
          <LeftMenuItem key={index} {...menu} position={index} />
        ))}
      </List>
      {/* <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </>
  );
};

export default LeftMenu;

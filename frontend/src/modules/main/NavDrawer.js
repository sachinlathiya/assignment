import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';

export class NavDrawer extends React.Component {
  
  render() {
    return (
      <Drawer
        anchor="left"
        open={this.props.drawerOpened}
        onClose={this.props.toggleDrawer(false)}
      >
        <div
          onClick={this.props.toggleDrawer(false)}
          onKeyDown={this.props.toggleDrawer(false)}
        >
          <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
         
          <ListItemText primary="All Gallery" />
        </ListItem>
        <ListItem button>
         
          <ListItemText primary="Help" />
        </ListItem>
        <ListItem button>
        <Link  href="/" >
          <ListItemText primary="Sign Out" />
          </Link>
        </ListItem>
           </List>
        </div>
      </Drawer>
    );
  }
}

import NavBar from "../../layouts/NavBar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import React from "react";
import FabAddNew from "../../shared/FabAddNew";
import FabDelete from "../../shared/FabDelete";

const EventsPage = () => {
  return (
    <div>
      <NavBar></NavBar>

      <List
        sx={{
          width: "100%",
          maxWidth: "90%",
          bgcolor: "background.paper",
          mt: 2,
        }}
      >
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Item1"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="red"
                >
                  nombre de la persona
                </Typography>
                {" — aca va la descripcion de la tarea"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Item1"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="red"
                >
                  nombre de la persona
                </Typography>
                {" — aca va la descripcion de la tarea"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Item1"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="red"
                >
                  nombre de la persona
                </Typography>
                {" — aca va la descripcion de la tarea"}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>

      <div className="fab-container">
        <FabDelete></FabDelete>
        <FabAddNew></FabAddNew>
      </div>
    </div>
  );
};

export default EventsPage;

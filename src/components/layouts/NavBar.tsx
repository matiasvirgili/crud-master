import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ExitToAppSharpIcon from "@mui/icons-material/ExitToAppSharp";
import { useHistory } from "react-router";
import { Elinks } from "../routes/links";
import { useAuth } from "../../config/use-auth";

const NavBar = () => {
  const history = useHistory();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    history.replace(Elinks.login);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Events App
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            <ExitToAppSharpIcon />
            Salir
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;

import { Fab } from "@mui/material";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import "../../styles/fab.css";

const FabDelete = () => {
  return (
    <Fab
      className="fab fab-danger"
      size="medium"
      color="error"
      aria-label="add"
    >
      <DeleteSharpIcon />
    </Fab>
  );
};

export default FabDelete;

import { Fab } from "@mui/material";
import AddSharpIcon from "@mui/icons-material/AddSharp";

const FabAddNew = () => {
  return (
    <Fab className="fab" size="medium" color="primary" aria-label="add">
      <AddSharpIcon />
    </Fab>
  );
};

export default FabAddNew;

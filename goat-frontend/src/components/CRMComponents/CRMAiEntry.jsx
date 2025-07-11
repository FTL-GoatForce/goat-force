import {
  Box,
  Button,
  Typography,
  IconButton,
  Avatar,
  List,
  ListItem,
  ListItemText,
  TextField,
  InputAdornment,
  Tooltip,
  Chip,
} from "@mui/material";
import { alpha } from "@mui/material";
import logo from "../../assets/sfgoat.webp";

const CRMAiEntry = ({ sender, context }) => {
  return (
    // Ai / Rightside Text
    <ListItem
      sx={{
        display: "flex",
        backgroundColor: "rgba(55, 70, 104, 0.5)",
        ml: 1,
        width: "fit-content",
        maxWidth: "80%",
        border: (theme) =>
          `1px solid ${alpha(theme.palette.primary.light, 0.2)}`,
        borderRadius: 2,
        mt: 1,
        mb: 1,
      }}
    >
      <Avatar sx={{ mb: 0, height: 28, width: 28, mr: 1 }} src={logo} />
      <Typography sx={{ color: "text.primary", fontSize: ".9rem" }}>
        {context}
      </Typography>
    </ListItem>
  );
};

export default CRMAiEntry;

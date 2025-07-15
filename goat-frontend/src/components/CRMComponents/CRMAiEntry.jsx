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
import Markdown from "react-markdown";
import { alpha } from "@mui/material";
import logo from "../../assets/sfgoat.webp";

const CRMAiEntry = ({ sender, context }) => {
  return (
    // Ai / Rightside Text
    <ListItem
      sx={{
        display: "flex",
        alignItems: "flex-start",
        backgroundColor: "rgba(55, 70, 104, 0.5)",
        ml: 1,
        px: 1.5,
        py: 0.75,
        width: "fit-content",
        maxWidth: "80%",
        border: (theme) =>
          `1px solid ${alpha(theme.palette.primary.light, 0.2)}`,
        borderRadius: 2,
        mt: 1,
        mb: 1,
      }}
    >
      <Avatar sx={{ mt: "2px", height: 24, width: 24, mr: 1 }} src={logo} />
      <Typography
        sx={{ color: "text.primary", fontSize: ".9rem", lineHeight: 1.4 }}
      >
        <Markdown>{context}</Markdown>
      </Typography>
    </ListItem>
  );
};

export default CRMAiEntry;

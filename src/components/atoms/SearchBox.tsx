import { TextField } from "@mui/material";
import { useTheme } from "@mui/material";

export function SearchBox() {
  const theme = useTheme();

  return (
    <TextField
      label="Search books"
      placeholder="Search by title or author"
      size="small"
      sx={{
        width: "40%",
        marginLeft: 2,
        marginRight: 2,
        "& .MuiInputBase-input": {
          padding: 1,
          color: theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.87)" : "rgba(255, 255, 255, 0.87)",
        },
        "& .MuiOutlinedInput-root": {
          borderRadius: 2,
          // Transparent background, white outline for visibility
          backgroundColor: "transparent",
          borderColor: "white",
          borderWidth: 1,
        },
        "&:hover .MuiOutlinedInput-root": {
          borderColor: "white",
          // Optional: very subtle background on hover
          backgroundColor: theme.palette.mode === "light"
            ? "rgba(0, 0, 0, 0.03)"
            : "rgba(255, 255, 255, 0.03)",
        },
        "&.Mui-focused .MuiOutlinedInput-root": {
          borderColor: theme.palette.primary.main,
          boxShadow: `${theme.palette.mode === "light" 
            ? theme.palette.primary.main 
            : theme.palette.primary.main} 0 0 0 2px`,
          backgroundColor: "transparent",
        },
        "& .MuiInputLabel-root": {
          color: theme.palette.mode === "light" 
            ? "rgba(0, 0, 0, 0.6)" 
            : "rgba(255, 255, 255, 0.7)",
        },
        "&.Mui-focused .MuiInputLabel-root": {
          color: theme.palette.primary.main,
        },
      }}
    />
  );
}
import { TextField } from "@mui/material";

export function SearchBox() {
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
        },
        "& .MuiOutlinedInput-root": {
          borderradius: 2,
        },
        "&:hover .MuiOutlinedInput-root": {
          bordercolor: "divider",
        },
        "&.Mui-focused .MuiOutlinedInput-root": {
          bordercolor: "primary.main",
        },
      }}
    />
  );
}
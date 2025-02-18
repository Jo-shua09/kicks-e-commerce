import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function LimitTags() {
  return (
    <Autocomplete
      multiple
      limitTags={2}
      id="multiple-limit-tags"
      options={shoeTypes}
      getOptionLabel={(option) => option.name}
      defaultValue={[shoeTypes[0], shoeTypes[1], shoeTypes[1]]}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Shoe Types"
          placeholder="Select types"
          InputLabelProps={{
            style: { color: "#333", fontSize: "1.4rem", fontWeight: "700" },
          }}
          InputProps={{
            ...params.InputProps,
            style: { fontSize: "1.2rem" },
          }}
        />
      )}
      sx={{
        width: "100%",
        backgroundColor: "#f5f5f5",
        borderRadius: "1rem",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#ccc",
          },
          "&:hover fieldset": {
            borderColor: "#999",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#666",
          },
        },
        "& .MuiChip-root": {
          backgroundColor: "#e0e0e0",
          color: "#333",
          fontSize: "0.8rem",
        },
      }}
    />
  );
}

const shoeTypes = [
  { id: 1, name: "Casual shoes" },
  { id: 2, name: "Runners" },
  { id: 3, name: "Hiking" },
  { id: 4, name: "Sneaker" },
  { id: 5, name: "Basketball" },
  { id: 6, name: "Golf" },
  { id: 7, name: "Outdoor" },
];

import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags() {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={shoeTypes}
      disableCloseOnSelect
      getOptionLabel={(option) => option.name}
      renderOption={(props, option, { selected }) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps} style={{ fontSize: "1.6rem", zIndex: "99" }}>
            <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
            {option.name}
          </li>
        );
      }}
      style={{ width: "100%", maxWidth: "400px" }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Shoe Type"
          placeholder="Select type"
          InputLabelProps={{
            style: { color: "#333", fontSize: "1.6rem", fontWeight: "700" },
          }}
          InputProps={{
            ...params.InputProps,
            style: { fontSize: "1.6rem" },
          }}
        />
      )}
      sx={{
        height: "100%",
        backgroundColor: "#f5f5f5",
        borderRadius: "1.5rem",
        zIndex: 9999,
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
          fontWeight: "bold",
          fontSize: "1.6rem",
        },
        "& .MuiAutocomplete-option": {
          fontSize: "1.6rem",
        },
        "& .MuiAutocomplete-popper": {
          zIndex: 99999,
        },
        "& .MuiSvgIcon-root": {
          fontSize: "2rem",
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

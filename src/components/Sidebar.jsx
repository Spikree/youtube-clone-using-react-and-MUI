import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

function Sidebar() {
  return (
    <>
      <Stack
        sx={{
          overflowY: "auto",
          height: { sx: "auto", md: "95%" },
          flexDirection: { md: "column" },
        }}
      >
        {categories.map((category) => (
          <button key={category.name} className="category-btn">
            <span>{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </Stack>
    </>
  );
}

export default Sidebar;

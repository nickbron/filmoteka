import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationControlled({ count, onPage, page }) {
  return (
    <Stack
      spacing={2}
      sx={{ mt: "8rem", display: "flex", alignItems: "center" }}
    >
      <Typography>Page: {page}</Typography>
      <Pagination count={count} page={page} onChange={onPage} />
    </Stack>
  );
}

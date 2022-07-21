import { Box, Button, IconButton } from "@mui/material";
import React, { useState } from "react";

export const ButtonBar = () => {
  const [alignment, setAlignment] = useState(0);

  const handleChange = (newAlignment: number) => {
    setAlignment(newAlignment);
  };

  const styleRating = {
    "&:focus": {
      background: "hsl(216, 12%, 54%)",
    },
    "&:hover": {
      background: "hsl(25, 97%, 53%)",
    },
    fontSize: 20,
    width: 50,
    height: 50,
    borderRadius: "100% ",
    color: "hsl(0,0%,100%)",
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <IconButton className="rating" sx={styleRating}>
          1
        </IconButton>
        <IconButton className="rating" sx={styleRating}>
          2
        </IconButton>
        <IconButton className="rating" sx={styleRating}>
          3
        </IconButton>
        <IconButton className="rating" sx={styleRating}>
          4
        </IconButton>
        <IconButton className="rating" sx={styleRating}>
          5
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          sx={{
            backgroundColor: "hsl(25, 97%, 53%)",
            color: "hsl(0, 0%, 100%)",
            borderRadius: "20px",
            width: "100%",
            height: "40px",
            "&:hover": {
              backgroundColor: "hsl(0, 0%, 100%)",
              color: "hsl(25, 97%, 53%)",
            },
          }}
        >
          SUBMIT
        </Button>
      </Box>
    </>
  );
};

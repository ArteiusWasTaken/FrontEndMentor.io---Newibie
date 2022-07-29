import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Box, IconButton, Typography } from "@mui/material";
export const Footer = () => {
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "space-around" }}
        width="150px"
        paddingTop="50px"
      >
        <IconButton className="upload-icon icon">
          <FontAwesomeIcon
            icon={faFacebook}
            className="font-upload"
            color={"hsl(223, 87%, 63%)"}
          />
        </IconButton>
        <IconButton className="upload-icon icon">
          <FontAwesomeIcon
            icon={faTwitter}
            className="font-upload"
            color={"hsl(223, 87%, 63%)"}
          />
        </IconButton>
        <IconButton className="upload-icon icon">
          <FontAwesomeIcon
            icon={faInstagram}
            className="font-upload"
            color={"hsl(223, 87%, 63%)"}
          />
        </IconButton>
      </Box>
      <Typography fontSize="15px" className="footer" paddingTop="20px">
        &copy; Copyright Ping. All rights reserved.
      </Typography>
    </>
  );
};

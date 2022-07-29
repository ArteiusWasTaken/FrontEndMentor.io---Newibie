import { Typography } from "@mui/material";
export const Title = () => {
  return (
    <>
      <Typography
        fontWeight={300}
        variant="h3"
        paddingTop="50px"
        className="titles"
      >
        We are launching <span className="emphasis">soon!</span>
      </Typography>

      <Typography fontWeight={300} variant="body1">
        Subscribe and get notified
      </Typography>
    </>
  );
};

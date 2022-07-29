import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import type { NextPage } from "next";

import { BaseLayout } from "../components/layout";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <Box className="container">
        <Box className="box left" color="white">
          <Box padding="40px">
            <Typography variant="h3" fontWeight="700">
              Learn to code by watching others
            </Typography>
            <Typography variant="body1" fontWeight="500" paddingTop="30px">
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </Typography>
          </Box>
        </Box>
        <Box className="box right">B</Box>
      </Box>
    </BaseLayout>
  );
};
export default Home;

import type { NextPage } from "next";
import { BaseLayout } from "../components/layout";
import { RatingCard } from "../components/ui";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <RatingCard />
    </BaseLayout>
  );
};

export default Home;

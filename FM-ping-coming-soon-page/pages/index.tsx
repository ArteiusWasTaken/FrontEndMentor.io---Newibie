import type { NextPage } from "next";
import Image from "next/image";

import { BaseLayout } from "../components/layout";
import { Footer, Title } from "../components/ui";
import { Form } from "../components/form";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <Image src="/img/logo.svg" width="86" height="26" alt="Logo" />
      <Title />
      <Form />
      <Image
        src="/img/illustration-dashboard.png"
        width="500"
        height="340"
        alt="dashboard"
      />

      <Footer />
    </BaseLayout>
  );
};
export default Home;

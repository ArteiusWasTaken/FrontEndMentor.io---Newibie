import Head from "next/head";
import React, { FC } from "react";

interface Props {
  title?: string;
  pageDescription?: string;
  children?: React.ReactNode;
}
const origin = typeof window === "undefined" ? "" : window.location.origin;

export const BaseLayout: FC<Props> = ({
  title = "ArceusDex",
  pageDescription = "100% Complete",
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={pageDescription} />

        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        <meta property="og:image" content="./img/desktop-preview.jpg" />
        <meta
          property="og:image"
          content={`${origin}/img/desktop-preview.png`}
        />
      </Head>

      <main
        style={{
          display: "flex",
          height: "100vh",
          width: "100vw",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gridGap: 8,
        }}
      >
        {children}
      </main>
      <footer>{/* TODO: mi custom footer */}</footer>
    </>
  );
};

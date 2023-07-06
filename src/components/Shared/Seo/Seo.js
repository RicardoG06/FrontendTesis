import Head from "next/head";

export function Seo(props) {
  const {
    title = "PathFinder",
    description = "Tus asesores favoritos para descubrir distintas disciplinas al mejor precio.",
  } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
    </Head>
  );
}

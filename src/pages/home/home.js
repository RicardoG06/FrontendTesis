import { BasicLayout } from "@/layouts";
import { Container } from "semantic-ui-react";
import { Home } from "@/components/Home";
import { Separator, BarTrust, BannerAd, Seo } from "@/components/Shared";

import { useCart } from "@/hooks";

const platformsId = {
  ingenieriadesistemas: 15,
  ingenieriadesoftware: 16,
};


export default function HomePage() {
  return (
    <>
      <Seo />

      <BasicLayout>

      <Home.BannerLastGamePublished />
      <Separator height={30} />
        <BannerAd
          title="Registrate y obten los mejores ofertas"
          subtitle="¡Explora las distintas opciones y elige el tuyo!"
          btnTitle="Entrar ahora"
          btnLink="/account"
          image="images/imagenfondo2.png"
        />

        {/* <Separator height={100} />

        <Container>
          <Home.LatestGames
            title="Ingenieria de Sistemas"
            limit={5}
            platformId={platformsId.ingenieriadesistemas}
          />
        </Container>
        <Separator height={100} />
        <Container>
          <Home.LatestGames
            title="Ingenieria de Software"
            limit={5}
            platformId={platformsId.ingenieriadesoftware}
          />
        </Container> */}
    <Separator height={30} />
        <BarTrust />
        <Separator height={1} />

      </BasicLayout>
    </>
  );
}

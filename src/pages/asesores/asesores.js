import { BasicLayout } from "@/layouts";
import { Container } from "semantic-ui-react";
import { Home } from "@/components/Home";
import { Separator, BarTrust, BannerAd, Seo } from "@/components/Shared";


const platformsId = {
  ingenieriadesistemas: 15,
  ingenieriadesoftware: 16,
};

export default function HomePage() {
  return (
    <>
      <Seo />

      <BasicLayout>

      <Separator height={150} />

      <Container>
        <Home.SliderL
          title="Ingenieria de Sistemas"
          platformId={platformsId.ingenieriadesistemas}
        />

      </Container>
      <Separator height={100} />

      <Container>
        <Home.SliderL
          title="Ingenieria de Software"
          platformId={platformsId.ingenieriadesoftware}
        />

      </Container>

    <Separator height={100} />

        <BarTrust />
      </BasicLayout>
    </>
  );
}

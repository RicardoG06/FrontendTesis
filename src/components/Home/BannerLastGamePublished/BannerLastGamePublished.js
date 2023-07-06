
import { Container, Image } from "semantic-ui-react";
import Link from "next/link";
import { Game } from "@/api";
import styles from "./BannerLastGamePublished.module.scss";
import { useTypewriter,Cursor } from "react-simple-typewriter";


export function BannerLastGamePublished() {

  const [text] = useTypewriter({
    words: [
      "Más de 3 millones de alumnos encontrar su vocación",
      "¿Estás listo para enfrentarte al mundo?",
      "Sabemos de lo que eres capaz por eso queremos guiarte en tu mejor versión",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed:10,
    delaySpeed:2000,
  });

  return (
    <div className={styles.container}>
      <Image src="/images/fondo1.png" className={styles.wallpaper} />

      <div className={styles.infoContainer} href="/">
        <Container>

          <h1>Buscar asesorías particulares</h1>

          <h2>{text} <Cursor cursoBlinking cursorStyle="|" cursorColor="#ffaa17"/></h2>
        </Container>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import Link from "next/link";
import { Game } from "@/api";
import Slider from "react-slick";
import styles from "./SliderL.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const gameCtrl = new Game();

const settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow:3,
    slidesToScroll: 1
};

export  function SliderL(props) {
    const { title, platformId = null } = props;
    const [games, setGames] = useState(null);

    useEffect(() => {
            (async () => {
                try {
                    const response = await gameCtrl.getLatestPublished({
                    platformId,
                    });
                    setGames(response.data);
                } catch (error) {
                    console.error(error);
                }
            })();
    }, []);

    if (!games) return null;

    return (
        <>
            <h2 className={styles.titulo}>{title}</h2>
            <div>
                {
                    <Slider {... settings}>
                    {
                        games.map((game, index) => {
                            return (
                                <div key={index}>
                                    <Link
                                            key={game.id}
                                            href={`/${game.attributes.slug}`}
                                            className={styles.game}
                                    >
                                            <div>
                                            <img src={game.attributes.wallpaper.data.attributes.url} />
                                            </div>
                                            <div>
                                            <span>{game.attributes.title}</span>
                                            <span className={styles.price}>S/.
                                                {game.attributes.price}
                                            </span>
                                            </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                    </Slider>
                }
            </div>
        </>
    );

}

import Link from "next/link";
import { map } from "lodash";
import { Label } from "@/components/Shared";
import styles from "./GridGames.module.scss";

export function GridGames(props) {
  const { games } = props;

  return (
    <div className={styles.gridGames}>
      {
        map(games, (game) => {
          return (
            (
              <Link
                key={game.id}
                href={`/${game.attributes.slug}`}
                className={styles.game}
              >
                <div>
                  <img src={game.attributes.cover.data.attributes.url} />
                </div>
                <div>
                  <span>{game.attributes.title}</span>
                  <span className={styles.price}>S/.
                    {game.attributes.price}
                  </span>
                </div>
              </Link>
            )
          )
        }
        )}
    </div>
  );
}

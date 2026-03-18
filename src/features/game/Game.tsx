import { Board } from "./components/Board/Board";
import * as styles from "./Game.css";

export const Game = () => {
  return (
    <div className={styles.gameContainerStyle}>
      <Board />
    </div>
  );
};

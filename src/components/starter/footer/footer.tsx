import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "../../../routes/layout";
import styles from "./footer.module.css";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer>
      <div>
        <a href="https://www.jw.org/es" target="_blank" class={styles.anchor}>
          <span>Made by Apex Analitic &copy;</span>
          <span class={styles.spacer}>|</span>
          <span>2024</span>
        </a>
      </div>
    </footer>
  );
});

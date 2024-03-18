import styles from "./store.module.css";
import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { BsSend } from "@qwikest/icons/bootstrap";
import { BsPlusCircleFill } from "@qwikest/icons/bootstrap";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default component$(() => {
  useVisibleTask$(async () => {
      await import('bootstrap');
  })
  return ( 
     <div class={[styles.install]}>

        <div  class={[styles.apple]}>
            <a href="https://www.apple.com/co/app-store/" target="_blank"><img src="appStore.png"alt="appStore" style="width:180px;height:53px "/></a>
        </div>

        <div class={[styles.google]} >
            <a href="https://play.google.com/store/games?hl=es_CO&gl=US" target="_blank"><img src="googlePlay.png"  alt="googlePlay" style="width:208px;height:80px "/></a>
        </div>

    </div>

);
});

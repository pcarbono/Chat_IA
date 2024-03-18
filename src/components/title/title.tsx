import styles from "./title.module.css";
import { component$, useVisibleTask$ } from "@builder.io/qwik";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BsFileEarmarkPlusFill, BsTypeH4 } from "@qwikest/icons/bootstrap";

export default component$(() => {
  useVisibleTask$(async () => {
      await import('bootstrap');
  })
  return ( 
    <div class={[styles.logo]}>
        <img src="/Apex.svg" class={styles.image} style="width: 80px;height:80px"/>
        <div class={styles.title}>Apex Analitic</div>
    </div>
    


 
  );
});
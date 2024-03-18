import styles from "./upgrade.module.css";
import { component$, useVisibleTask$ } from "@builder.io/qwik";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

export default component$(() => {
    useVisibleTask$(async () => {
        await import('bootstrap');
    })

    return ( 

 <div class={[styles.contenedor,"btn-group"]}>
  <button class={[styles.buttom,"btn btn-secondary btn-lg dropdown-toggle"]} type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <h4 class={[styles.text]}>ChatAPEX <span class={[styles.opaque]}>3.5</span></h4>
  </button>
  <ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>  



        );
    });
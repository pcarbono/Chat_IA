
import styles from "./profile.module.css";
import { component$,useVisibleTask$ } from "@builder.io/qwik";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BsGearFill } from "@qwikest/icons/bootstrap";
import { BsBoxArrowRight } from "@qwikest/icons/bootstrap";

export default component$(() => {
  useVisibleTask$(async () => {
      await import('bootstrap');
  })
  return ( 
    
  
    <div class={[styles.card,"btn-group dropup"]}>
      <button type="button" class={[styles.user, "btn btn-secondary dropdown-toggle"]} data-bs-toggle="dropdown" aria-expanded="false">
        <div class={[styles.image]}>PC</div>
        <spam class={[styles.name]}>Pedro Carbonó</spam>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Customize ChatApex</a></li>
        <li>  <a class="dropdown-item" href="#"><BsGearFill/>Settings</a></li>
        <li><hr class="dropdown-divider"/></li>
        <li><a class="dropdown-item" href="#"><BsBoxArrowRight/>Log out</a></li>
      </ul>
    </div>
  
  
);


});
import styles from "./chat.module.css";
import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { BsSend } from "@qwikest/icons/bootstrap";
import { BsSendFill } from "@qwikest/icons/bootstrap";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default component$(() => {
  useVisibleTask$(async () => {
      await import('bootstrap');
  })
  return ( 
     
    <div class="input-group mb-3">
      <input type="text" class={[styles.input,"form-control"]} placeholder="Message ChatApex" aria-label="Recipient's username" aria-describedby="button-addon2"/>
      <button class={[styles.button,"btn btn-outline-secondary"]} type="button" id="button-addon2">
        <BsSendFill class={[styles.icon]}/>
      </button>
    </div>


 
  );
});

import styles from "./newChat.module.css";
import { component$, useVisibleTask$ } from "@builder.io/qwik";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BsPlusCircleFill} from "@qwikest/icons/bootstrap";

export default component$(() => {
  useVisibleTask$(async () => {
      await import('bootstrap');
  })
  return ( 
   
        <button type="button" class={[styles.newChat,"btn btn-primary btn-lg container-fluid" ]}>
            <BsPlusCircleFill class={styles.icon}/>
            <span class={styles.text}>New Chat</span>
        </button>
    


 
  );
});

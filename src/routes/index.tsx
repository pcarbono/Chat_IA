import { component$,useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Chat from "../components/chat/chat";
import Footer from "../components/starter/footer/footer";
import Store from "../components/store/store";
import Title from '../components/title/title'
import NewChat from '../components/newChat/newChat'
import Profile from '../components/profile/profile'
import Upgrade from '../components/upgrade/upgrade'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from "./index.module.css";




export default component$(() => {
  useVisibleTask$(async () => {
      await import('bootstrap');
  })
  return (
    <>
    <div class= {["row align-items-start"]}>
      <div class={[styles.options, "col-2"]}>
        <div class="container-fluid">
          <Title />
          <NewChat/>
        </div>
        <div class={[styles.store]}>
          <Store />
        </div>
        <div class={[styles.acount]}>
          <Profile />
        </div>
      </div>  
      <div class={[styles.chat, "col-10"]}>
        <div class={[styles.upgrade]}>

          <Upgrade />
        </div>
        <div class={["col-8"]}>
          <div class={[styles.logo]}/>
          <Chat />
          <Footer/>
        </div>
      </div>
    </div>
      
      
      
      
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

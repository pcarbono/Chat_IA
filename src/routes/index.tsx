import { component$,useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Chat from "../components/chat/chat";
import Footer from "../components/starter/footer/footer";
import Store from "../components/store/store";
import Title from '../components/title/title'
import NewChat from '../components/newChat/newChat'
import Profile from '../components/profile/profile'
import Upgrade from '../components/upgrade/upgrade'
import { BsQuestionCircleFill } from "@qwikest/icons/bootstrap";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from "./index.module.css";




export default component$(() => {
  useVisibleTask$(async () => {
      await import('bootstrap');
  })
  return (
    <>
    <div class= {[".container-fluid row"]}>
      <div class={[styles.chat, "col-12 col-md-8 col-lg-9 col-xl-10" ]}>
        <div class={[styles.upgrade]}>
          <Upgrade />
        </div>
        <div class={[styles.help]}>
           <BsQuestionCircleFill class={[styles.helpIcon]} />
        </div>
        <div class={["col-8"]}>
          <div class={[styles.logo]}/>
          <Chat />
          <Footer/>
        </div>
      </div>
      
      <div class={[styles.options, "col-12 col-md-4 col-lg-3 col-xl-2"]}>
        <div >
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
    </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "ChatApex",
  meta: [
    {
      name: "Chat",
      content: "IA",
    },
  ],
};

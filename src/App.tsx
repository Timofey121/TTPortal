import { Aside } from "./components/aside/Aside";
import { Header } from "./components/header/Header";

export const App = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Aside />
      </main>
    </>
  );
};

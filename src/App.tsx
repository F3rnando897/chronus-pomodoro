import { TimerIcon } from "lucide-react";
import "./App.css";
import "./styles/global.css";
import "./styles/theme.css";
import { Heading } from "./components/Heading";

export function App() {
  return (
    <>
      <Heading>
        <h1>Olá mundo!</h1>
        <button>
          <TimerIcon />
        </button>
      </Heading>
      
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        nihil ipsa dolorum, suscipit atque ratione sit? Dignissimos et
        cupiditate, eos aspernatur qui quis praesentium, dolor, incidunt commodi
        velit omnis perspiciatis.
      </p>
    </>
  );
}

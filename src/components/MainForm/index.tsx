import { PlayCircleIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../cycles";

export function MainForm() {
    return(
  <form action="" className="form">
    <div className="formRow">
      <DefaultInput
        labelText="task"
        id="meuInput"
        type="text"
        placeholder="Digite algo"
      />
    </div>

    <div className="formRow">
      <p>Proximo intervalo é de 25min</p>
    </div>
    <div className="formRow">
      <Cycles />
    </div>
    <div className="formRow">
      <DefaultButton icon={<PlayCircleIcon />} />
    </div>
  </form>);
}

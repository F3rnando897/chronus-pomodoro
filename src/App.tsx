import { TaskStateModel } from "./models/TaskStateModel";
import { Home } from "./pages/Home";

import "./styles/global.css";
import "./styles/theme.css";
import { useState } from "react";

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formatttedSecondsRemaining: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};


export function App() {
  const [state, setState] = useState(initialState);

  return <Home />;
}

import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ToggleTheme = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Toggle the theme</button>;
};

export default ToggleTheme;

// class ToggleTheme extends Component {
//   static contextType = ThemeContext;

//   render() {
//     const { toggleTheme } = this.context;

//     return <button onClick={toggleTheme}>Toggle the theme</button>;
//   }
// }

// export default ToggleTheme;

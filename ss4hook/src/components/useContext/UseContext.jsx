import { createContext, useState } from "react";
import Comp_A from "./Comp_A";

//  compA => compB => compC
//  tu A truyen xuong B qua props
//  tu B truyen xuogn C thong qua props


//khai bao context o component cha va export ra ben ngoai de su dung
export const ThemeContext = createContext();   // buoc 1: khoi tao

function UseContext() {
    const [theme, setTheme] = useState("light")

    const handleChangeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        // buoc 2
        <ThemeContext.Provider value={theme}>
            <div>
                <button onClick={handleChangeTheme}>Change Theme</button>
                <Comp_A />
            </div>
        </ThemeContext.Provider>
    );
}

export default UseContext;

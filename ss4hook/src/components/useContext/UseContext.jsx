import { createContext, useState } from "react";
import Comp_A from "./Comp_A";

//khai bao context o component cha va export ra ben ngoai de su dung
export const ThemeContext = createContext();   // buoc 1

function UseContext() {
    const [Theme, setTheme] = useState('light')

    const handleChangeTheme = () => {
        setTheme(Theme === 'light' ? 'dark' : 'light')
    }

    return (
        // buoc 2
        <ThemeContext.Provider value={Theme}>
            <><button onClick={handleChangeTheme}>Change Theme</button>
                <Comp_A > </Comp_A >
            </>
        </ThemeContext.Provider>
    );
}

export default UseContext;

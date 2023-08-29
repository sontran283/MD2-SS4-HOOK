import { useContext } from "react";
import { ThemeContext } from "./useContext";

function Comp_B() {
    //  buoc 3
    const Theme = useContext(ThemeContext);

    return (
        <>
            <p className={Theme}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam ipsum hic impedit! Commodi, reprehenderit, consequatur molestiae dignissimos amet pariatur quaerat adipisci repellat quis aperiam rerum possimus ratione, tempora magni id.</p>
        </>
    );
}

export default Comp_B;
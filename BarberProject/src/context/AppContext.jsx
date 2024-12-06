import { createContext } from "react";
import { barbers} from "../assets/assets_frontend/assets";

export const AppContext = createContext()

const AppContextProvider = (props) => {
    const value = {
        barbers
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider
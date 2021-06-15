import axios from "axios";
import { createContext, useState, useEffect } from "react";

const MainContext = createContext();

const MainProvider = ({ children }) => {
    const [apiData, setApiData] = useState([]);
    const getApiData = async () => {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random/3');
        setApiData(response.data.message)
    }
    useEffect(() => {
        getApiData()
    }, [])
    const data = { apiData }
    return (
        <MainContext.Provider value={data}>
            {children}
        </MainContext.Provider>
    )
};

export { MainProvider }

export default MainContext;
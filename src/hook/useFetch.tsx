import { useState, useEffect } from "react";
import config from "../config";
// type

const useFetch = (endpoint: string, baseValue: any) => {
    const [data, setData] = useState(baseValue);
    useEffect(() => {
        fetch(config.API_URL + endpoint)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err));
    }, [endpoint]);
    return [data, setData];
};
export default useFetch;

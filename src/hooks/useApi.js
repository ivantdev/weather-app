import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

const useApi = () => {
    const { data } = useContext(ApiContext);
    return data || null;
}

export { useApi };
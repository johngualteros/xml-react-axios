import { useState } from "react";
import { convertNumber } from "../services/converterNumber";

export function useConverter({numberProp}) {
    const [number, setNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const getNumber = async () => {
        setLoading(true);
        try {
            const response = await convertNumber(numberProp);
            setNumber(response);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    return { number, loading, error, getNumber}
}
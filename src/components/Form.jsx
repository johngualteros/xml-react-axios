import React, { useEffect, useState } from 'react'
import styles from './Form.module.css';
import { useConverter } from '../hooks/useConverter';

const Form = () => {
    const [numberRequest, setNumberRequest] = useState('');
    const { number, loading, error, getNumber } = useConverter({numberRequest});

    useEffect(() => {
        getNumber();
    }, [])
  return (
    <div>
        <form>
            <input type="text" className={styles.input} onChange={() => setNumberRequest()}/>
            <button>Send</button> 
        </form>

        {{ number }}
    </div>
  )
}

export default Form
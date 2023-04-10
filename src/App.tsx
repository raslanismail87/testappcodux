import { useState } from 'react';
import styles from './App.module.scss';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <div>
                <button>Click Me</button>
            </div>
        </div>
    );
}

export default App;

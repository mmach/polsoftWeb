import { useState, useEffect } from 'react';
import { TerminalOutput } from 'react-terminal-ui';

type TypewriterConfiguration = {
    text: string;
    delay: number;
    infinite?: boolean;
}

const Typewriter = ({ text, delay, infinite = false }: TypewriterConfiguration) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    console.log(`typewriter${  text}`)

    useEffect(() => {
        console.log(text, delay);
        let timeout: NodeJS.Timeout;

        if (currentIndex <= text.length) {
            timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

        } else if (infinite) {
            setCurrentIndex(0);
            setCurrentText('');
        }

        return () => clearTimeout(timeout);
    }, [currentIndex, delay, infinite, text]);

    return <TerminalOutput>{currentText}</TerminalOutput>;
};

export default Typewriter;
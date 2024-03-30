import { useState, useEffect } from "react";

function MyComponent2() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log('add event listener');

        return () => {
            window.removeEventListener('resize', handleResize);
            console.log('clean up');
        }
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);
    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <div>
            <p>Width: {width}px</p>
            <p>Height: {height}px</p>
        </div>
    )
}

export default MyComponent2;
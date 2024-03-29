
function Button() {

    // let count = 0;
    // const handleClick = (name) => {
    //     if (count < 3) {
    //         count++;
    //         console.log(`${name} Clicked ${count} times`);
    //     } else {
    //         console.log(`${name} Stop Clicking`)
    //     }
    // }

    const handleClick = (e) => {
        e.target.textContent = "Clicked"
    }

    return (<button onDoubleClick = {(e) => handleClick(e)}>Click Me</button>);
}

export default Button;

function Button(){

    let count = 0;

    const handleClick = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} times`)
        }else{
            console.log(`${name} Stop clicking me`);
        }
    }

    const handleClick2 = (name) => {
        console.log(`${name} Stop clicking me`);
    }

    const handleClick1 = (e) => {
        e.target.textContent = "OUCH";
    }

    return(
        <>
            <button onClick={() => handleClick("Anass")}>Click me</button>
            <button onClick={() => handleClick2("Anass")}>Click me</button>
            <button onDoubleClick={handleClick1}>Click me</button>
        </>
    );
}

export default Button;

function Button(){

    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        borderRadius: "5px",
        padding: "10px 20px",
        cursor: "pointer",
        border: "none"
    }

    return (
        <>
            <button className="button" style={{marginRight: "20px", backgroundColor: "hsl(10, 100%, 50%)", color: "white", borderRadius: "5px", padding: "10px 20px", cursor: "pointer", border: "none"}}>Click me</button>
            <button style={styles}>Click me</button>
        </>
    );
}

export default Button;
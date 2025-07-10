import "./style.css"

function Header (){
    return (
        <div className="en-tete">
            <div className="tete">
                <h1>WE PPROVIDE ADVICE WHEN YOUR BUSINESS NEEDS IT NOT JUST WHEN YOU ASK FOR IT</h1>
                <div className="hr">
                    <hr />
                    <span></span>
                    <hr />
                </div>
                <h3>WE PPROVIDE ADVICE WHEN YOUR BUSINESS NEEDS IT NOT JUST WHEN YOU ASK FOR IT</h3>
                <button onClick={hello}>Commencez</button>
            </div>
        </div>
    )
}

function hello (){
    alert("hello");
}

export default Header
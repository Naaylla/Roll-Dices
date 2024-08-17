import "./App.css"


export default function Die(props) {

    return (
        <div className={`dice ${props.face}`}>

            {
                Array.from({ length: props.number }).map(() => <span className="dot"> </span>)
            }

        </div>
    )
}
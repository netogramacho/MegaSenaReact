export default function NumberDisplay(props) {
    return (
        <div style = {{
            fontSize:"2rem",
            width: "50px",
            height: "50px",
            backgroundColor: "#222",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            margin:"10px"
        }}>
            {props.number}
        </div>
    )
}
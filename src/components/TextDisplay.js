function TextDisplay(props){

    return(
        <span>
            <h1>Text Should Appear: </h1>
            <p>{props.textTyped}</p>
        </span>
    )
}

export default TextDisplay
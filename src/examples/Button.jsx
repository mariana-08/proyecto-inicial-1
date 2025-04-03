const Button = ({text, handler, style, disabled}) => {
    return (
        <button onClick= {handler} className={style} disabled={disabled}>
            {text}
        </button>
    ) 
}
export default Button

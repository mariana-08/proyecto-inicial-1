const Button = ({text, handler, style}) => {
    return(
        <button onClick ={handler} className={style}>
            {text}
            {/* Texto a mostrar: {text} */}
        </button>
    )
}
// de esta forma se crea un boton que se puede reutilizar en cualquier parte del codigo usando props para cambiar el texto, el estilo y la funcion que se ejecuta al hacer click
export default Button;
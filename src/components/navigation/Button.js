const Button = ({text, handleClick}) => {
  return (
    <button className="bg-azulito text-black hover:bg-black hover:text-white transition-colors duration-300 leading-tight font-bold py-2 px-3 rounded text-sm sm:text-base md:text-lg" onClick={handleClick}>
      {text}
    </button>
  )
}


export default Button

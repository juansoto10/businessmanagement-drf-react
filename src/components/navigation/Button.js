const Button = ({text, handleClick}) => {
  return (
    <button className="bg-indigo-400 hover:bg-indigo-500 text-white leading-tight font-bold py-2 px-3 rounded text-sm sm:text-base md:text-lg" onClick={handleClick}>
      {text}
    </button>
  )
}


export default Button

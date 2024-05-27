export const NanoSkew = () => {
    return (
      <div className="
      size-20 bg-rose-800/95 rounded-md -skew-y-[10deg] -skew-x-[5deg]
      before:flex before:items-center before:justify-center before:-m-1 before:absolute before:-inset-1 before:size-20 before:rounded-md before:text-center before:text-zinc-950 before:text-3xl before:font-thin before:bg-rose-700/90 
      after:flex after:items-center after:justify-center after:-m-3 after:absolute after:-inset-1 after:size-20 after:rounded-md after:text-center after:text-zinc-950 after:text-7xl after:font-bold after:bg-rose-600
      
      before:content-['nano']
      after:content-['N']

      hover:after:translate-x-[-1.8rem]

      before:hover:translate-x-[4.2rem]
      before:transition-transform
      before:duration-500
      before:ease-out
      before:delay-100
  
      after:transition-transform
      after:duration-[550ms]
      after:ease-out
      after:delay-200

      " >
      </div>
    )
}

export const NanoSkewJs = () => {
  return (
    <div className="
    size-20 bg-yellow-800/95 rounded-md -skew-y-[10deg] -skew-x-[5deg]
    before:flex before:items-center before:justify-center before:-m-1 before:absolute before:-inset-1 before:size-20 before:rounded-md before:text-center before:text-zinc-950 before:text-3xl before:font-thin before:bg-yellow-700/90 
    after:flex after:items-end after:justify-start after:p-0.5 after:-m-3 after:absolute after:-inset-1 after:size-20 after:rounded-md after:text-center after:text-zinc-950 after:text-7xl after:font-bold after:bg-yellow-600
    
    before:content-['nano']
    after:content-['JS']

    before:hover:translate-x-[4.2rem]
    before:transition-all
    before:duration-500
    before:ease-out
    before:delay-150

    " ></div>
  )
}

export const NanoSkewTs = () => {
  return (
    <div className="
    size-20 bg-blue-800/95 rounded-md p-0.5 -skew-y-[10deg] -skew-x-[5deg]
    before:flex before:items-center before:justify-center before:p-0.5 before:-m-1 before:absolute before:-inset-1 before:size-20 before:rounded-md before:text-center before:text-zinc-950 before:text-3xl before:font-thin before:bg-blue-700/90 
    after:flex after:items-end after:justify-start after:p-0.5 after:-m-3 after:absolute after:-inset-1 after:size-20 after:rounded-md after:text-center after:text-zinc-950 after:text-5xl after:font-bold after:bg-blue-600
    
    before:content-['nano']
    after:content-['TS']
    
    hover:after:translate-x-[-2.2rem]

    before:hover:translate-x-[4.2rem]
    before:transition-transform
    before:duration-500
    before:ease-out
    before:delay-100

    after:transition-transform
    after:duration-[550ms]
    after:ease-out
    after:delay-200

    " ></div>
  )
}
import React from 'react'

interface RatingsProp{
  value: number | undefined
  color: string
}

const Rating: React.FC<RatingsProp> = ({ value, color }): JSX.Element => {
  const isFilled = (i:number,limit:number):boolean => {
    if (i < limit) return true
    else return false
  }
  return <div className='flex flex-row' >
    {value && Array.from(Array(5), (e, i) => {
      return <i key={`${i}-${e}`} className={isFilled(i,value) ? "fas fa-star" : 'far fa-star'} style={{color}}></i>
    })}
  </div>
}

export default Rating

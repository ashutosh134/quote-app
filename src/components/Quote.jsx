import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuote } from '../features/quote/quoteSlice'

const Quote = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchQuote())

    },[])


const {quoteData , isLoading , isError } = useSelector((state) => state.quote)


if(isError){

    return(
        <h1 className="display-6 my-3 text-center text-danger">Somthing Went Wrong</h1>
    )
}


if(isLoading){
    return(
        <h1 className="my-3 text-center text-secondary display-6">Loading....</h1>
    )
}


  return (
    <marquee className= "mt-5">
      <h1 className="display-6 ">{quoteData.content} - {quoteData.author}</h1>
    </marquee>
  )
}
export default Quote;

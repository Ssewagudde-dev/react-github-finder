import React from 'react'
import spinner from './assets/spinner.gif'

export const Spinner = () => {
  return (
    <div className="w-full mt-20">
        <img src={spinner} width={180} alt="Loading.." className="text-center mx-auto" />
    </div>
  )
}

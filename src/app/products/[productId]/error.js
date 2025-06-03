"use client"

import React from 'react'

function ProductByIdError({error}) {
  return (
    <div>{error.message}</div>
  )
}

export default ProductByIdError
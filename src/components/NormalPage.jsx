import React from 'react'

export const NormalPage = (BodyComponent) => {
  return (
    <>
    <div>Header</div>
    <BodyComponent />
    <div>Footer</div>
    </>
  )
}

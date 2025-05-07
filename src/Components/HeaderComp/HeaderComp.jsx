import React from 'react'

function HeaderComp({title,bgImg,childrean}) {
  return (
    <div className={`${bgImg} d-flex justify-content-center align-items-center  fw-semibold`}>
        {title}
        {childrean}
    </div>
  )
}

export default HeaderComp
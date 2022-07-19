import React from 'react'

export const CardGiphy = ({arr = []}) => {

    // console.log(arr);
  return (
    <>
        {
            arr.map((item) => (
            <div id='cardTenor'>
              <img src={item.images.original.url} className="imgCardTenor"/>
            </div>
            ))                
        }
    </>
  )
}

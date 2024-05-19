import React from 'react'
import ItemCard from '../itemCard'
import '../../styles/storeItems.less'


function StoreItems({itemType}) {
  return (
    <div className='store-items'>
      <ItemCard itemType={itemType} />
      <ItemCard itemType={itemType} />
      <ItemCard itemType={itemType} />
      <ItemCard itemType={itemType} />
      <ItemCard itemType={itemType} />
      <ItemCard itemType={itemType} />
      <ItemCard itemType={itemType} />
      <ItemCard itemType={itemType} />
      <ItemCard itemType={itemType} />
    </div>
  )
}

export default StoreItems
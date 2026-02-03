import React from 'react'
import MainLayout from '../../Layouts/MainLayout'
import ItemLists from '../../Components/HomePage/ItemLists'

function shopPage() {
  return (
   <>
   <MainLayout>
     <section className='shop-page py-5'>
          <ItemLists/>
     </section>
   </MainLayout>
   </>
  )
}

export default shopPage
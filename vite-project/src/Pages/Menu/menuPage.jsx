import React from 'react'
import MainLayout from '../../Layouts/MainLayout'
import ItemLists from '../../Components/HomePage/ItemLists'

function menuPage() {
  return (
    <>

    <MainLayout>
        <section className='menuPage'>
          <ItemLists/>
        </section>
    </MainLayout>
    
    </>
  )
}

export default menuPage
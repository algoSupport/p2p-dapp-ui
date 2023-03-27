import React from 'react'
import {ChartsWidget1, ListsWidget2} from '../../../../_metronic/partials/widgets'

export function Overview() {
  return (
    <div className='row g-5 g-xxl-8'>
      <div className='col-xl-6'>
        <ListsWidget2 className='mb-5 mb-xxl-8' />
      </div>

      <div className='col-xl-6'>
        <ChartsWidget1 className='mb-5 mb-xxl-8' />
      </div>
    </div>
  )
}

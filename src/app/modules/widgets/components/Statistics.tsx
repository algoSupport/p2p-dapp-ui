import React, {FC} from 'react'
import {
  StatisticsWidget3,
  StatisticsWidget4,
  StatisticsWidget7,
  StatisticsWidget8,
} from '../../../../_metronic/partials/widgets'

const Stats: FC = () => {
  return (
    <>
      {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
        <h4 className='text-muted'>Protocol Statistics</h4>
        <div className='col-xl-4'>
          <StatisticsWidget3
            className='card-xl-stretch mb-xl-8'
            color='success'
            title='Successful Buy Orders'
            description='Buy orders completed in the last 7 days'
            change='91'
          />
        </div>

        <div className='col-xl-4'>
          <StatisticsWidget8
            className='card-xl-stretch mb-xl-8'
            color='danger'
            title='Successful Sell Orders'
            description='Sell orders completed in the last 7 days'
            change='60'
          />
        </div>

        <div className='col-xl-4'>
          <StatisticsWidget7
            className='card-xl-stretch mb-5 mb-xl-8'
            color='primary'
            title='Active Traders'
            description='Active traders on the marketplace'
            change='93'
          />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row'>
        <div className='col-xl-12'>
          <StatisticsWidget4
            className='card-xl-stretch mb-xl-8'
            svgIcon='/media/icons/duotune/general/gen032.svg'
            color='primary'
            description='TVL'
            change='$47,430.17'
          />
        </div>
      </div>
      {/* end::Row */}
    </>
  )
}

export {Stats}

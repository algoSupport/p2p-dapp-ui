import React, {FC} from 'react'
import {
  StatisticsWidget3,
  StatisticsWidget4,
  StatisticsWidget6,
} from '../../../../_metronic/partials/widgets'

const Stats: FC = () => {
  return (
    <>
      {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
        <div className='col-xl-4'>
          <StatisticsWidget3
            className='card-xl-stretch mb-xl-8'
            color='success'
            title='Successful Buy Orders'
            description='Buy orders completed in the last 7 days'
            change='13'
          />
        </div>

        <div className='col-xl-4'>
          <StatisticsWidget3
            className='card-xl-stretch mb-xl-8'
            color='danger'
            title='Successful Sell Orders'
            description='Sell orders completed in the last 7 days'
            change='60'
          />
        </div>

        <div className='col-xl-4'>
          <StatisticsWidget3
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
            svgIcon='/media/icons/duotune/general/gen025.svg'
            color='primary'
            description='TVL'
            change='$0.00'
          />
        </div>
      </div>
      {/* end::Row */}
    </>
  )
}

export {Stats}

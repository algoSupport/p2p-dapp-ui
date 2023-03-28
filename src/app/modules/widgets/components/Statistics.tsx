import React, {FC} from 'react'
import {
  StatisticsWidget3,
  StatisticsWidget4,
  StatisticsWidget5,
  StatisticsWidget6,
} from '../../../../_metronic/partials/widgets'

const Statistics: FC = () => {
  return (
    <>
      {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
        <div className='col-xl-4'>
          <StatisticsWidget3
            className='card-xl-stretch mb-xl-8'
            color='success'
            title='7 Day Buy Orders'
            description='Your Weekly Sales Chart'
            change='+100'
          />
        </div>

        <div className='col-xl-4'>
          <StatisticsWidget3
            className='card-xl-stretch mb-xl-8'
            color='danger'
            title='Authors Progress'
            description='Marketplace Authors Chart'
            change='-260'
          />
        </div>

        <div className='col-xl-4'>
          <StatisticsWidget3
            className='card-xl-stretch mb-5 mb-xl-8'
            color='primary'
            title='Sales Progress'
            description='Marketplace Sales Chart'
            change='+180'
          />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
        <div className='col-xl-4'>
          <StatisticsWidget4
            className='card-xl-stretch mb-xl-8'
            svgIcon='/media/icons/duotune/ecommerce/ecm002.svg'
            color='info'
            description='Sales Change'
            change='+256'
          />
        </div>

        <div className='col-xl-4'>
          <StatisticsWidget4
            className='card-xl-stretch mb-xl-8'
            svgIcon='/media/icons/duotune/general/gen025.svg'
            color='success'
            description='Weekly Income'
            change='750$'
          />
        </div>

        <div className='col-xl-4'>
          <StatisticsWidget4
            className='card-xl-stretch mb-5 mb-xl-8'
            svgIcon='/media/icons/duotune/finance/fin006.svg'
            color='primary'
            description='New Users'
            change='+6.6K'
          />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
        <div className='col-xl-4'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='/media/icons/duotune/ecommerce/ecm002.svg'
            color='danger'
            iconColor='white'
            title='Shopping Cart'
            description='Lands, Houses, Ranchos, Farms'
          />
        </div>

        <div className='col-xl-4'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='/media/icons/duotune/ecommerce/ecm008.svg'
            color='primary'
            iconColor='white'
            title='Appartments'
            description='Flats, Shared Rooms, Duplex'
          />
        </div>

        <div className='col-xl-4'>
          <StatisticsWidget5
            className='card-xl-stretch mb-5 mb-xl-8'
            svgIcon='/media/icons/duotune/graphs/gra005.svg'
            color='success'
            iconColor='white'
            title='Sales Stats'
            description='50% Increased for FY20'
          />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='/media/icons/duotune/general/gen032.svg'
            color='white'
            iconColor='primary'
            title='500M$'
            description='SAP UI Progress'
          />
        </div>

        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='/media/icons/duotune/ecommerce/ecm008.svg'
            color='dark'
            iconColor='white'
            title='+3000'
            description='New Customers'
          />
        </div>

        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='/media/icons/duotune/finance/fin006.svg'
            color='warning'
            iconColor='white'
            title='$50,000'
            description='Milestone Reached'
          />
        </div>

        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-5 mb-xl-8'
            svgIcon='/media/icons/duotune/graphs/gra007.svg'
            color='info'
            iconColor='white'
            title='$50,000'
            description='Milestone Reached'
          />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
        <div className='col-xl-4'>
          <StatisticsWidget6
            className='card-xl-stretch mb-xl-8'
            color='success'
            title='Avarage'
            description='Project Progress'
            progress='50%'
          />
        </div>

        <div className='col-xl-4'>
          <StatisticsWidget6
            className='card-xl-stretch mb-xl-8'
            color='warning'
            title='48k Goal'
            description='Company Finance'
            progress='15%'
          />
        </div>

        <div className='col-xl-4'>
          <StatisticsWidget6
            className='card-xl-stretch mb-xl-8'
            color='primary'
            title='400k Impressions'
            description='Marketing Analysis'
            progress='76%'
          />
        </div>
      </div>
      {/* end::Row */}
    </>
  )
}

export {Statistics}

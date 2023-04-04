/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {TransactionHistory} from '../../_metronic/partials/widgets'

const History: FC = () => {
  return (
    <>
      <div className='card'>
        {/* begin::Header */}
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'>Transaction History</span>
            <span className='text-muted mt-1 fw-semibold fs-7'>View your transaction history</span>
          </h3>
        </div>
        {/* end::Header */}
        {/* begin::Body */}
        <div className='card-body py-3'>
          <div className='tab-content'>
            {/* begin::Tap pane */}
            <div className='tab-pane fade show active' id='kt_table_widget_7_tab_1'>
              {/* begin::Table container */}
              <TransactionHistory className='mb-5 mb-xl-8' />
              {/* end::Table */}
            </div>
            {/* end::Tap pane */}
          </div>
        </div>
        {/* end::Body */}
      </div>
    </>
  )
}

export {History}

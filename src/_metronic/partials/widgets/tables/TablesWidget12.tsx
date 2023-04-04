/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'

type Props = {
  className: string
}

const TablesWidget12: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-2'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='fw-bold fs-6'>Sell Crypto</span>
        </h3>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-1'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted bg-light fs-7'>
                <th className='ps-4 min-w-180px rounded-start'>Buyer</th>
                <th className='min-w-100px'>Limits</th>
                <th className='min-w-100px'>Payment Methods</th>
                <th className='min-w-100px'>Volume Traded</th>
                <th className='min-w-100px'>Rating</th>
                <th className='min-w-100px text-end rounded-end'></th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td colSpan={5} className='text-muted'>
                  Please connect your wallet to view available offers.
                </td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {TablesWidget12}

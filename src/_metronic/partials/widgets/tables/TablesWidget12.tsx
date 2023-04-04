/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {CreateAppModal} from '../../../partials'
import {useState} from 'react'

type Props = {
  className: string
}

const TablesWidget12: React.FC<Props> = ({className}) => {
  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false)
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
                <th className='min-w-100px'>Assets</th>
                <th className='min-w-100px'>Limits</th>
                <th className='min-w-100px'>Payment Methods</th>
                <th className='min-w-100px'>Volume Traded</th>
                <th className='min-w-100px rounded-end'>Rating</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td colSpan={6} className='text-muted text-center mt-2'>
                  Please connect your wallet to view available offers.
                </td>
              </tr>
              <tr>
                <td colSpan={6} className='text-muted text-center mt-2'>
                  <a
                    href='#'
                    onClick={() => setShowCreateAppModal(true)}
                    className='btn btn-sm btn-primary'
                    data-bs-toggle='modal'
                    data-bs-target='#kt_modal_create_app'
                  >
                    Verify Wallet
                  </a>
                  <CreateAppModal
                    show={showCreateAppModal}
                    handleClose={() => setShowCreateAppModal(false)}
                  />
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

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {CreateAppModal} from '../..'
import {useState} from 'react'
type Props = {
  className: string
}

const TransactionHistory: React.FC<Props> = ({className}) => {
  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false)
  return (
    <div className={`card ${className}`}>
      <div className='card-body p-0 pt-4'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted bg-light fs-7'>
                <th className='ps-4 min-w-100px rounded-start'>Date</th>
                <th className='min-w-100px'>Asset</th>
                <th className='min-w-100px'>Network</th>
                <th className='min-w-100px'>Amount</th>
                <th className='min-w-100px'>Status</th>
                <th className='min-w-100px rounded-end'>Actions</th>
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

export {TransactionHistory}

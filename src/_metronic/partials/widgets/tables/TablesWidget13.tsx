/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'

type Props = {
  className: string
}

const TablesWidget13: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Sell Crypto</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>125+ Offers</span>
        </h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
          </button>
          {/* begin::Menu 2 */}
          <div
            className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-200px'
            data-kt-menu='true'
          >
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <div className='menu-content fs-7 text-dark fw-bold px-3 py-4'>Quick Actions</div>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu separator */}
            <div className='separator mb-3 opacity-75'></div>
            {/* end::Menu separator */}
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <a href='#' className='menu-link px-3'>
                New Ticket
              </a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <a href='#' className='menu-link px-3'>
                New Customer
              </a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div
              className='menu-item px-3'
              data-kt-menu-trigger='hover'
              data-kt-menu-placement='right-start'
              data-kt-menu-flip='left-start, top'
            >
              {/* begin::Menu item */}
              <a href='#' className='menu-link px-3'>
                <span className='menu-title'>New Group</span>
                <span className='menu-arrow'></span>
              </a>
              {/* end::Menu item */}
              {/* begin::Menu sub */}
              <div className='menu-sub menu-sub-dropdown w-175px py-4'>
                {/* begin::Menu item */}
                <div className='menu-item px-3'>
                  <a href='#' className='menu-link px-3'>
                    Admin Group
                  </a>
                </div>
                {/* end::Menu item */}
                {/* begin::Menu item */}
                <div className='menu-item px-3'>
                  <a href='#' className='menu-link px-3'>
                    Staff Group
                  </a>
                </div>
                {/* end::Menu item */}
                {/* begin::Menu item */}
                <div className='menu-item px-3'>
                  <a href='#' className='menu-link px-3'>
                    Member Group
                  </a>
                </div>
                {/* end::Menu item */}
              </div>
              {/* end::Menu sub */}
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <a href='#' className='menu-link px-3'>
                New Contact
              </a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu separator */}
            <div className='separator mt-3 opacity-75'></div>
            {/* end::Menu separator */}
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <div className='menu-content px-3 py-3'>
                <a className='btn btn-primary btn-sm px-4' href='#'>
                  Generate Reports
                </a>
              </div>
            </div>
            {/* end::Menu item */}
          </div>
          {/* end::Menu 2 */}
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
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
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-circle symbol-40px me-5'>
                      <span className='symbol-label bg-light'>
                        <img
                          src={toAbsoluteUrl('/media/avatars/300-1.jpg')}
                          className='h-75 symbol symbol-circle symbol-40px'
                          alt=''
                        />
                      </span>
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-7'>
                        scsimmons
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-8'>
                        0x4..103
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    Max: $185,7k
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    Min: $2500.00
                  </span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    Bank Wire
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>USA/UK</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    $7,503,227.19
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    24h: $98,403.04
                  </span>
                </td>
                <td>
                  <div className='rating'>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                  </div>
                  <span className='text-muted fw-semibold text-muted d-block fs-8 mt-1'>
                    1k+ Ratings
                  </span>
                </td>
                <td className='text-end'>
                  <a href='#' className='btn btn-bg-light btn-primary btn-sm px-4 me-2'>
                    Sell
                  </a>
                  <a
                    href='#'
                    className='btn btn-bg-light btn-color-muted btn-active-color-white btn-sm px-4'
                  >
                    View Profile
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-circle symbol-40px me-5'>
                      <span className='symbol-label bg-light'>
                        <img
                          src={toAbsoluteUrl('/media/avatars/300-25.jpg')}
                          className='h-75 symbol symbol-circle symbol-40px'
                          alt=''
                        />
                      </span>
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-7'>
                        vic1902
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-8'>
                        0x4..103
                      </span>
                    </div>
                  </div>
                </td>

                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    Max: $391,4k
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    Min: $500.00
                  </span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    Bank Wire
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>USA/UK</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    $17,503,227.19
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    24h: $198,403.04
                  </span>
                </td>
                <td>
                  <div className='rating'>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                  </div>
                  <span className='text-muted fw-semibold text-muted d-block fs-8 mt-1'>
                    1k+ Ratings
                  </span>
                </td>
                <td className='text-end'>
                  <a href='#' className='btn btn-bg-light btn-primary btn-sm px-4 me-2'>
                    Sell
                  </a>
                  <a
                    href='#'
                    className='btn btn-bg-light btn-color-muted btn-active-color-white btn-sm px-4'
                  >
                    View Profile
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-circle symbol-40px me-5'>
                      <span className='symbol-label bg-light'>
                        <img
                          src={toAbsoluteUrl('/media/svg/avatars/002-girl.svg')}
                          className='h-75'
                          alt=''
                        />
                      </span>
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-7'>
                        0x8..223
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-8'>
                        0x8..223
                      </span>
                    </div>
                  </div>
                </td>

                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    Max: $44,3k
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    Min: $2500.00
                  </span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    Bank Wire
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>USA/UK</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    $17,503,227.19
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    24h: $198,403.04
                  </span>
                </td>
                <td>
                  <div className='rating'>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                  </div>
                  <span className='text-muted fw-semibold text-muted d-block fs-8 mt-1'>
                    1k+ Ratings
                  </span>
                </td>
                <td className='text-end'>
                  <a href='#' className='btn btn-bg-light btn-primary btn-sm px-4 me-2'>
                    Sell
                  </a>
                  <a
                    href='#'
                    className='btn btn-bg-light btn-color-muted btn-active-color-white btn-sm px-4'
                  >
                    View Profile
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-circle symbol-40px me-5'>
                      <span className='symbol-label bg-light'>
                        <img
                          src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
                          className='h-75'
                          alt=''
                        />
                      </span>
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-7'>
                        vic1902
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-8'>
                        0x4..103
                      </span>
                    </div>
                  </div>
                </td>

                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    Max: $711.1k
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    Min: $2500.00
                  </span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    Bank Wire
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>USA/UK</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    $17,503,227.19
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    24h: $198,403.04
                  </span>
                </td>
                <td>
                  <div className='rating'>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                  </div>
                  <span className='text-muted fw-semibold text-muted d-block fs-8 mt-1'>
                    1k+ Ratings
                  </span>
                </td>
                <td className='text-end'>
                  <a href='#' className='btn btn-bg-light btn-primary btn-sm px-4 me-2'>
                    Sell
                  </a>
                  <a
                    href='#'
                    className='btn btn-bg-light btn-color-muted btn-active-color-white btn-sm px-4'
                  >
                    View Profile
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-circle symbol-40px me-5'>
                      <span className='symbol-label bg-light'>
                        <img
                          src={toAbsoluteUrl('/media/svg/avatars/004-boy-1.svg')}
                          className='h-75'
                          alt=''
                        />
                      </span>
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-7'>
                        vic1902
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-8'>
                        0x4..103
                      </span>
                    </div>
                  </div>
                </td>

                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    Max: $5.4k
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    Min: $2500.00
                  </span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    Bank Wire
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>USA/UK</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    $17,503,227.19
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    24h: $198,403.04
                  </span>
                </td>
                <td>
                  <div className='rating'>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                  </div>
                  <span className='text-muted fw-semibold text-muted d-block fs-8 mt-1'>
                    1k+ Ratings
                  </span>
                </td>
                <td className='text-end'>
                  <a href='#' className='btn btn-bg-light btn-primary btn-sm px-4 me-2'>
                    Sell
                  </a>
                  <a
                    href='#'
                    className='btn btn-bg-light btn-color-muted btn-active-color-white btn-sm px-4'
                  >
                    View Profile
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-circle symbol-40px me-5'>
                      <span className='symbol-label bg-light'>
                        <img
                          src='https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=024'
                          className='h-75'
                          alt=''
                        />
                      </span>
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-7'>
                        vic1902
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-8'>
                        0x4..103
                      </span>
                    </div>
                  </div>
                </td>

                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    Max: $227.6k
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    Min: $2500.00
                  </span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    Bank Wire
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>USA/UK</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    $17,503,227.19
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    24h: $198,403.04
                  </span>
                </td>
                <td>
                  <div className='rating'>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                  </div>
                  <span className='text-muted fw-semibold text-muted d-block fs-8 mt-1'>
                    1k+ Ratings
                  </span>
                </td>
                <td className='text-end'>
                  <a href='#' className='btn btn-bg-light btn-primary btn-sm px-4 me-2'>
                    Sell
                  </a>
                  <a
                    href='#'
                    className='btn btn-bg-light btn-color-muted btn-active-color-white btn-sm px-4'
                  >
                    View Profile
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-circle symbol-40px me-5'>
                      <span className='symbol-label bg-light'>
                        <img
                          src={toAbsoluteUrl('/media/svg/avatars/008-boy-3.svg')}
                          className='h-75'
                          alt=''
                        />
                      </span>
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-7'>
                        vic1902
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-8'>
                        0x4..103
                      </span>
                    </div>
                  </div>
                </td>

                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    Max: $100k
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    Min: $2500.00
                  </span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    Bank Wire
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>USA/UK</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    $17,503,227.19
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    24h: $198,403.04
                  </span>
                </td>
                <td>
                  <div className='rating'>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                  </div>
                  <span className='text-muted fw-semibold text-muted d-block fs-8 mt-1'>
                    1k+ Ratings
                  </span>
                </td>
                <td className='text-end'>
                  <a href='#' className='btn btn-bg-light btn-primary btn-sm px-4 me-2'>
                    Sell
                  </a>
                  <a
                    href='#'
                    className='btn btn-bg-light btn-color-muted btn-active-color-white btn-sm px-4'
                  >
                    View Profile
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-circle symbol-40px me-5'>
                      <span className='symbol-label bg-light'>
                        <img
                          src='https://cryptologos.cc/logos/shiba-inu-shib-logo.svg?v=024'
                          className='h-75'
                          alt=''
                        />
                      </span>
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-7'>
                        vic1902
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-8'>
                        0x4..103
                      </span>
                    </div>
                  </div>
                </td>

                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    Max: $25,3k
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    Min: $2500.00
                  </span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    Bank Wire
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>USA/UK</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    $17,503,227.19
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    24h: $198,403.04
                  </span>
                </td>
                <td>
                  <div className='rating'>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                  </div>
                  <span className='text-muted fw-semibold text-muted d-block fs-8 mt-1'>
                    1k+ Ratings
                  </span>
                </td>
                <td className='text-end'>
                  <a href='#' className='btn btn-bg-light btn-primary btn-sm px-4 me-2'>
                    Sell
                  </a>
                  <a
                    href='#'
                    className='btn btn-bg-light btn-color-muted btn-active-color-white btn-sm px-4'
                  >
                    View Profile
                  </a>
                </td>
              </tr>

              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-circle symbol-40px me-5'>
                      <span className='symbol-label bg-light'>
                        <img
                          src={toAbsoluteUrl('/media/avatars/300-1.jpg')}
                          className='h-75 symbol symbol-circle symbol-40px'
                          alt=''
                        />
                      </span>
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-7'>
                        scsimmons
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-8'>
                        0x4..103
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    Max: $185,7k
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    Min: $2500.00
                  </span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    Bank Wire
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>USA/UK</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    $7,503,227.19
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    24h: $98,403.04
                  </span>
                </td>
                <td>
                  <div className='rating'>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                  </div>
                  <span className='text-muted fw-semibold text-muted d-block fs-8 mt-1'>
                    1k+ Ratings
                  </span>
                </td>
                <td className='text-end'>
                  <a href='#' className='btn btn-bg-light btn-primary btn-sm px-4 me-2'>
                    Sell
                  </a>
                  <a
                    href='#'
                    className='btn btn-bg-light btn-color-muted btn-active-color-white btn-sm px-4'
                  >
                    View Profile
                  </a>
                </td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        <ul className='pagination'>
          <li className='page-item previous disabled'>
            <a href='#' className='page-link'>
              <i className='previous'></i>
            </a>
          </li>
          <li className='page-item active'>
            <a href='#' className='page-link'>
              1
            </a>
          </li>
          <li className='page-item '>
            <a href='#' className='page-link'>
              2
            </a>
          </li>
          <li className='page-item'>
            <a href='#' className='page-link'>
              3
            </a>
          </li>
          <li className='page-item'>
            <a href='#' className='page-link'>
              4
            </a>
          </li>
          <li className='page-item'>
            <a href='#' className='page-link'>
              5
            </a>
          </li>
          <li className='page-item'>
            <a href='#' className='page-link'>
              6
            </a>
          </li>
          <li className='page-item next'>
            <a href='#' className='page-link'>
              <i className='next'></i>
            </a>
          </li>
        </ul>
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {TablesWidget13}

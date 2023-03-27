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
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Buy Crypto</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>500+ Offers</span>
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
                <th className='ps-4 min-w-180px rounded-start'>Seller</th>
                <th className='min-w-100px'>Assets</th>
                <th className='min-w-100px'>Limits</th>
                <th className='min-w-100px'>Methods</th>
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
                      <span className='symbol-label bg-light pulse pulse-success'>
                        <img
                          src={toAbsoluteUrl('/media/avatars/300-1.jpg')}
                          className='h-75 symbol symbol-circle symbol-40px'
                          alt=''
                        />
                        <span className='pulse-ring'></span>
                      </span>
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-7'>
                        marxdev{' '}
                        <KTSVG
                          path='/media/icons/duotune/general/gen026.svg'
                          className='svg-icon-2 svg-icon-primary'
                        />
                      </a>

                      <span className='text-muted fw-semibold text-muted d-block fs-8'>
                        0x1..321
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    <div className='symbol-group symbol-hover flex-shrink-0 me-1'>
                      {/* begin::User */}
                      <div className='symbol symbol-circle symbol-25px'>
                        <img
                          src='https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=024'
                          alt=''
                        />
                      </div>
                      {/* end::User */}

                      {/* begin::User */}
                      <div className='symbol symbol-circle symbol-25px'>
                        <img src='https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=024' alt='' />
                      </div>
                      {/* end::User */}

                      {/* begin::User */}
                      <div className='symbol symbol-circle symbol-25px'>
                        <img src='https://cryptologos.cc/logos/fantom-ftm-logo.svg?v=024' alt='' />
                      </div>
                      {/* end::User */}

                      {/* begin::User */}
                      <div className='symbol symbol-circle symbol-25px'>
                        <img src='https://cryptologos.cc/logos/tether-usdt-logo.svg?v=024' alt='' />
                      </div>
                      {/* end::User */}

                      {/* begin::User */}
                      <div className='symbol symbol-circle symbol-25px'>
                        <img
                          src='https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=024'
                          alt=''
                        />
                      </div>
                      <div className='symbol symbol-circle symbol-25px'>
                        <img src='https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=024' alt='' />
                      </div>
                      {/* end::User */}

                      {/* end::User */}
                    </div>
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    $1m+ $CIL Staked
                  </span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    Max: $185,7k
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    Min: $250.00
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
                    $7,503k
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    24h: $14,120.33
                  </span>
                </td>
                <td>
                  <div className='rating'>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='0'
                      checked={true}
                      onChange={() => {}}
                      type='radio'
                      id='kt_rating_2_input_0'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_1'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='1'
                      type='radio'
                      id='kt_rating_2_input_1'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_2'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='2'
                      type='radio'
                      id='kt_rating_2_input_2'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_3'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='3'
                      type='radio'
                      checked={true}
                      onChange={() => {}}
                      id='kt_rating_2_input_3'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_4'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='4'
                      type='radio'
                      id='kt_rating_2_input_4'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_5'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='5'
                      type='radio'
                      id='kt_rating_2_input_5'
                    />
                  </div>
                  <span className='text-muted fw-semibold text-muted d-block fs-8 mt-1'>
                    1k+ Reviews
                  </span>
                </td>
                <td className='text-end'>
                  <a href='#' className='btn btn-bg-light btn-primary btn-sm px-4 me-2'>
                    Buy
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
                      <span className='symbol-label bg-light pulse pulse-success '>
                        <img
                          src={toAbsoluteUrl('/media/avatars/300-25.jpg')}
                          className='h-75 symbol symbol-circle symbol-40px'
                          alt=''
                        />
                        <span className='pulse-ring'></span>
                      </span>
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-7'>
                        vic1902{' '}
                        <KTSVG
                          path='/media/icons/duotune/general/gen026.svg'
                          className='svg-icon-2 svg-icon-primary'
                        />
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-8'>
                        0x7..510
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className='symbol-group symbol-hover flex-shrink-0 me-1'>
                    {/* begin::User */}

                    {/* begin::User */}
                    <div className='symbol symbol-circle symbol-25px'>
                      <img src='https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=024' alt='' />
                    </div>
                    {/* end::User */}
                    {/* end::User */}

                    {/* begin::User */}
                    <div className='symbol symbol-circle symbol-25px'>
                      <img src='https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=024' alt='' />
                    </div>
                    {/* begin::User */}
                    <div className='symbol symbol-circle symbol-25px'>
                      <img src='https://cryptologos.cc/logos/fantom-ftm-logo.svg?v=024' alt='' />
                    </div>
                    <div className='symbol symbol-circle symbol-25px'>
                      <img src='https://cryptologos.cc/logos/aave-aave-logo.svg?v=024' alt='' />
                    </div>
                    {/* end::User */}

                    {/* end::User */}
                  </div>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    $250k+ $CIL Staked
                  </span>
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
                    $981,3k
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    24h: $48,004.09
                  </span>
                </td>
                <td>
                  <div className='rating'>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='0'
                      checked={true}
                      onChange={() => {}}
                      type='radio'
                      id='kt_rating_2_input_0'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_1'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='1'
                      type='radio'
                      id='kt_rating_2_input_1'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_2'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='2'
                      type='radio'
                      id='kt_rating_2_input_2'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_3'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='3'
                      type='radio'
                      checked={true}
                      onChange={() => {}}
                      id='kt_rating_2_input_3'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_4'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='4'
                      type='radio'
                      id='kt_rating_2_input_4'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_5'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='5'
                      type='radio'
                      id='kt_rating_2_input_5'
                    />
                  </div>
                  <span className='text-muted fw-semibold text-muted d-block fs-8 mt-1'>
                    500+ Reviews
                  </span>
                </td>
                <td className='text-end'>
                  <a href='#' className='btn btn-bg-light btn-primary btn-sm px-4 me-2'>
                    Buy
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
                      <span className='symbol-label bg-light pulse pulse-success '>
                        <img
                          src={toAbsoluteUrl('/media/svg/avatars/002-girl.svg')}
                          className='h-75'
                          alt=''
                        />
                        <span className='pulse-ring border-2'></span>
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
                  <div className='symbol-group symbol-hover flex-shrink-0 me-1'>
                    {/* begin::User */}
                    <div className='symbol symbol-circle symbol-25px'>
                      <img
                        src='https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.svg?v=024'
                        alt=''
                      />
                    </div>
                    {/* end::User */}

                    {/* begin::User */}
                    <div className='symbol symbol-circle symbol-25px'>
                      <img src='https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=024' alt='' />
                    </div>
                    {/* end::User */}

                    {/* begin::User */}
                    <div className='symbol symbol-circle symbol-25px'>
                      <img src='https://cryptologos.cc/logos/fantom-ftm-logo.svg?v=024' alt='' />
                    </div>
                    {/* end::User */}

                    {/* begin::User */}
                    <div className='symbol symbol-circle symbol-25px'>
                      <img
                        src='https://cryptologos.cc/logos/shiba-inu-shib-logo.svg?v=024'
                        alt=''
                      />
                    </div>
                    {/* end::User */}

                    {/* begin::User */}
                    <div className='symbol symbol-circle symbol-25px'>
                      <img src='https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=024' alt='' />
                    </div>
                    <div className='symbol symbol-circle symbol-25px'>
                      <img src='https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=024' alt='' />
                    </div>
                    {/* end::User */}

                    {/* end::User */}
                  </div>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    $250k+ $CIL Staked
                  </span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    Max: $44,3k
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    Min: $250.00
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
                    $1,440k
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    24h: $230,120.33
                  </span>
                </td>
                <td>
                  <div className='rating'>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='0'
                      checked={true}
                      onChange={() => {}}
                      type='radio'
                      id='kt_rating_2_input_0'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_1'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='1'
                      type='radio'
                      id='kt_rating_2_input_1'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_2'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='2'
                      type='radio'
                      id='kt_rating_2_input_2'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_3'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='3'
                      type='radio'
                      checked={true}
                      onChange={() => {}}
                      id='kt_rating_2_input_3'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_4'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='4'
                      type='radio'
                      id='kt_rating_2_input_4'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_5'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='5'
                      type='radio'
                      id='kt_rating_2_input_5'
                    />
                  </div>
                  <span className='text-muted fw-semibold text-muted d-block fs-8 mt-1'>
                    500+ Reviews
                  </span>
                </td>
                <td className='text-end'>
                  <a href='#' className='btn btn-bg-light btn-primary btn-sm px-4 me-2'>
                    Buy
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
                        CilistiaTest{' '}
                        <KTSVG
                          path='/media/icons/duotune/general/gen026.svg'
                          className='svg-icon-2 svg-icon-primary'
                        />
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-8'>
                        0x6..333
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className='symbol-group symbol-hover flex-shrink-0 me-1'>
                    {/* begin::User */}
                    <div className='symbol symbol-circle symbol-25px'>
                      <img
                        src='https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=024'
                        alt=''
                      />
                    </div>
                    {/* end::User */}

                    {/* begin::User */}
                    <div className='symbol symbol-circle symbol-25px'>
                      <img
                        src='https://cryptologos.cc/logos/shiba-inu-shib-logo.svg?v=024'
                        alt=''
                      />
                    </div>
                    {/* end::User */}
                    {/* end::User */}

                    <div className='symbol symbol-circle symbol-25px'>
                      <img src='https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=024' alt='' />
                    </div>
                    {/* end::User */}

                    {/* end::User */}
                  </div>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    $1.5m+ $CIL Staked
                  </span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    Max: $711.1k
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
                    $2,302k
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    24h: $198,403.04
                  </span>
                </td>
                <td>
                  <div className='rating'>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='0'
                      checked={true}
                      onChange={() => {}}
                      type='radio'
                      id='kt_rating_2_input_0'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_1'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='1'
                      type='radio'
                      id='kt_rating_2_input_1'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_2'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='2'
                      type='radio'
                      id='kt_rating_2_input_2'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_3'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='3'
                      type='radio'
                      checked={true}
                      onChange={() => {}}
                      id='kt_rating_2_input_3'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_4'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='4'
                      type='radio'
                      id='kt_rating_2_input_4'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_5'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='5'
                      type='radio'
                      id='kt_rating_2_input_5'
                    />
                  </div>
                  <span className='text-muted fw-semibold text-muted d-block fs-8 mt-1'>
                    2000+ Reviews
                  </span>
                </td>
                <td className='text-end'>
                  <a href='#' className='btn btn-bg-light btn-primary btn-sm px-4 me-2'>
                    Buy
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
                      <span className='symbol-label bg-light pulse pulse-success'>
                        <img
                          src={toAbsoluteUrl('/media/svg/avatars/004-boy-1.svg')}
                          className='h-75'
                          alt=''
                        />
                        <span className='pulse-ring'></span>
                      </span>
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-7'>
                        NonVerified
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-8'>
                        0xe..441
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className='symbol-group symbol-hover flex-shrink-0 me-1'>
                    {/* begin::User */}
                    <div className='symbol symbol-circle symbol-25px'>
                      <img src='https://cryptologos.cc/logos/aave-aave-logo.svg?v=024' alt='' />
                    </div>
                    {/* end::User */}

                    {/* begin::User */}
                    <div className='symbol symbol-circle symbol-25px'>
                      <img src='https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=024' alt='' />
                    </div>
                    {/* end::User */}

                    {/* begin::User */}
                    <div className='symbol symbol-circle symbol-25px'>
                      <img src='https://cryptologos.cc/logos/fantom-ftm-logo.svg?v=024' alt='' />
                    </div>
                    {/* end::User */}

                    {/* begin::User */}
                    <div className='symbol symbol-circle symbol-25px'>
                      <img src='https://cryptologos.cc/logos/tether-usdt-logo.svg?v=024' alt='' />
                    </div>
                    {/* end::User */}

                    {/* end::User */}

                    {/* end::User */}
                  </div>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    $20k+ $CIL Staked
                  </span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    Max: $5.4k
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    Min: $1500.00
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
                    $578,9k
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    24h: $90,004.09
                  </span>
                </td>
                <td>
                  <div className='rating'>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='0'
                      checked={true}
                      onChange={() => {}}
                      type='radio'
                      id='kt_rating_2_input_0'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_1'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='1'
                      type='radio'
                      id='kt_rating_2_input_1'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_2'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='2'
                      type='radio'
                      id='kt_rating_2_input_2'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_3'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='3'
                      type='radio'
                      checked={true}
                      onChange={() => {}}
                      id='kt_rating_2_input_3'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_4'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='4'
                      type='radio'
                      id='kt_rating_2_input_4'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_5'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='5'
                      type='radio'
                      id='kt_rating_2_input_5'
                    />
                  </div>
                  <span className='text-muted fw-semibold text-muted d-block fs-8 mt-1'>
                    2000+ Reviews
                  </span>
                </td>
                <td className='text-end'>
                  <a href='#' className='btn btn-bg-light btn-primary btn-sm px-4 me-2'>
                    Buy
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
                        btc4life{' '}
                        <KTSVG
                          path='/media/icons/duotune/general/gen026.svg'
                          className='svg-icon-2 svg-icon-primary'
                        />
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-8'>
                        0x4..103
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className='symbol-group symbol-hover flex-shrink-0 me-1'>
                    {/* begin::User */}
                    <div className='symbol symbol-circle symbol-25px'>
                      <img src='https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=024' alt='' />
                    </div>
                    {/* end::User */}

                    {/* begin::User */}
                    <div className='symbol symbol-circle symbol-25px'>
                      <img src='https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=024' alt='' />
                    </div>
                    {/* end::User */}

                    {/* end::User */}

                    {/* begin::User */}
                    <div className='symbol symbol-circle symbol-25px'>
                      <img src='https://cryptologos.cc/logos/tether-usdt-logo.svg?v=024' alt='' />
                    </div>
                    {/* end::User */}

                    {/* begin::User */}
                    <div className='symbol symbol-circle symbol-25px'>
                      <img src='https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=024' alt='' />
                    </div>

                    {/* end::User */}

                    {/* end::User */}
                  </div>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    $400k+ $CIL Staked
                  </span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    Max: $227.6k
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    Min: $1500.00
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
                    $1007,3k
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    24h: $77,004.09
                  </span>
                </td>
                <td>
                  <div className='rating'>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='0'
                      checked={true}
                      onChange={() => {}}
                      type='radio'
                      id='kt_rating_2_input_0'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_1'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='1'
                      type='radio'
                      id='kt_rating_2_input_1'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_2'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='2'
                      type='radio'
                      id='kt_rating_2_input_2'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_3'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='3'
                      type='radio'
                      checked={true}
                      onChange={() => {}}
                      id='kt_rating_2_input_3'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_4'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='4'
                      type='radio'
                      id='kt_rating_2_input_4'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_5'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='5'
                      type='radio'
                      id='kt_rating_2_input_5'
                    />
                  </div>
                  <span className='text-muted fw-semibold text-muted d-block fs-8 mt-1'>
                    100+ Reviews
                  </span>
                </td>
                <td className='text-end'>
                  <a href='#' className='btn btn-bg-light btn-primary btn-sm px-4 me-2'>
                    Buy
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
                      <span className='symbol-label bg-light pulse pulse-success'>
                        <img
                          src={toAbsoluteUrl('/media/svg/avatars/008-boy-3.svg')}
                          className='h-75'
                          alt=''
                        />
                        <span className='pulse-ring'></span>
                      </span>
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-7'>
                        simmons
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-8'>
                        0xf..618
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className='symbol-group symbol-hover flex-shrink-0 me-1'>
                    {/* begin::User */}

                    {/* end::User */}

                    {/* begin::User */}
                    <div className='symbol symbol-circle symbol-25px'>
                      <img src='https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=024' alt='' />
                    </div>
                    {/* end::User */}

                    {/* begin::User */}
                    <div className='symbol symbol-circle symbol-25px'>
                      <img src='https://cryptologos.cc/logos/fantom-ftm-logo.svg?v=024' alt='' />
                    </div>
                    {/* end::User */}

                    {/* end::User */}

                    {/* end::User */}
                  </div>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    $300k+ $CIL Staked
                  </span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    Max: $100k
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    Min: $1500.00
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
                    $55,3k
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    24h: $143,004.09
                  </span>
                </td>
                <td>
                  <div className='rating'>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='0'
                      checked={true}
                      onChange={() => {}}
                      type='radio'
                      id='kt_rating_2_input_0'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_1'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='1'
                      type='radio'
                      id='kt_rating_2_input_1'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_2'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='2'
                      type='radio'
                      id='kt_rating_2_input_2'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_3'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='3'
                      type='radio'
                      checked={true}
                      onChange={() => {}}
                      id='kt_rating_2_input_3'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_4'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='4'
                      type='radio'
                      id='kt_rating_2_input_4'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_5'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='5'
                      type='radio'
                      id='kt_rating_2_input_5'
                    />
                  </div>
                  <span className='text-muted fw-semibold text-muted d-block fs-8 mt-1'>
                    200+ Reviews
                  </span>
                </td>
                <td className='text-end'>
                  <a href='#' className='btn btn-bg-light btn-primary btn-sm px-4 me-2'>
                    Buy
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
                        shibbaby
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-8'>
                        0xd..279
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className='symbol-group symbol-hover flex-shrink-0 me-1'>
                    {/* begin::User */}
                    <div className='symbol symbol-circle symbol-25px'>
                      <img
                        src='https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=024'
                        alt=''
                      />
                    </div>

                    {/* end::User */}

                    <div className='symbol symbol-circle symbol-25px'>
                      <img src='https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=024' alt='' />
                    </div>
                    {/* end::User */}

                    {/* end::User */}
                  </div>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    $50k+ $CIL Staked
                  </span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    Max: $25,3k
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    Min: $1000.00
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
                    $168,7k
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-8'>
                    24h: $105,004.09
                  </span>
                </td>
                <td>
                  <div className='rating'>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='0'
                      checked={true}
                      onChange={() => {}}
                      type='radio'
                      id='kt_rating_2_input_0'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_1'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='1'
                      type='radio'
                      id='kt_rating_2_input_1'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_2'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='2'
                      type='radio'
                      id='kt_rating_2_input_2'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_3'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='3'
                      type='radio'
                      checked={true}
                      onChange={() => {}}
                      id='kt_rating_2_input_3'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_4'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='4'
                      type='radio'
                      id='kt_rating_2_input_4'
                    />

                    <label className='rating-label' htmlFor='kt_rating_2_input_5'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen029.svg'
                        className='svg-icon svg-icon-2'
                      />
                    </label>
                    <input
                      className='rating-input'
                      name='rating2'
                      value='5'
                      type='radio'
                      id='kt_rating_2_input_5'
                    />
                  </div>
                  <span className='text-muted fw-semibold text-muted d-block fs-8 mt-1'>
                    200+ Reviews
                  </span>
                </td>
                <td className='text-end'>
                  <a href='#' className='btn btn-bg-light btn-primary btn-sm px-4 me-2'>
                    Buy
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

export {TablesWidget12}

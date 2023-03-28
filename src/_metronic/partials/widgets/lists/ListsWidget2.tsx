/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
}

const ListsWidget2: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Recent Reviews</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>AVG Rating: 4.57 out of 5.00</span>
        </h3>
        <div className='card-toolbar'>
          <ul className='nav'>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary active fw-bold px-4 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_4_tab_1'
              >
                Month
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_4_tab_2'
              >
                Week
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4'
                data-bs-toggle='tab'
                href='#kt_table_widget_4_tab_3'
              >
                Day
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        <div className='tab-content'>
          {/* begin::Tap pane */}
          <div className='tab-pane fade show active' id='kt_table_widget_4_tab_1'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-140px'></th>
                    <th className='p-0 min-w-120px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-circle symbol-40px'>
                        <img src={toAbsoluteUrl('/media/svg/avatars/002-girl.svg')} alt='' />
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        jsimmons
                      </a>
                      <span className='text-muted fw-semibold d-block fs-7'>0x1e...489</span>
                    </td>
                    <td>
                      <span className='text-muted fw-semibold d-block fs-7'>Rating</span>
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
                    </td>
                    <td className='text-end'>
                      <a href='#' className='btn btn-light-twitter btn-sm'>
                        Read Full Review
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-circle symbol-40px'>
                        <img src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')} alt='' />
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        0x33zync
                      </a>
                      <span className='text-muted fw-semibold d-block fs-7'>0x33c..541</span>
                    </td>
                    <td>
                      <span className='text-muted fw-semibold d-block fs-7'>Rating</span>
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
                    </td>
                    <td className='text-end'>
                      <a href='#' className='btn btn-light-twitter btn-sm'>
                        Read Full Review
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-circle symbol-40px'>
                        <img src={toAbsoluteUrl('/media/svg/avatars/004-boy-1.svg')} alt='' />
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        bhcrypto.eth
                      </a>
                      <span className='text-muted fw-semibold d-block fs-7'>bhcrypto.eth</span>
                    </td>
                    <td>
                      <span className='text-muted fw-semibold d-block fs-7'>Rating</span>
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
                        <div className='rating-label me-2'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                      </div>
                    </td>
                    <td className='text-end'>
                      <a href='#' className='btn btn-light-twitter btn-sm'>
                        Read Full Review
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-circle symbol-40px'>
                        <img src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')} alt='' />
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        0x33zync
                      </a>
                      <span className='text-muted fw-semibold d-block fs-7'>0x33c..541</span>
                    </td>
                    <td>
                      <span className='text-muted fw-semibold d-block fs-7'>Rating</span>
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
                    </td>
                    <td className='text-end'>
                      <a href='#' className='btn btn-light-twitter btn-sm'>
                        Read Full Review
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-circle symbol-40px'>
                        <img src={toAbsoluteUrl('/media/svg/avatars/008-boy-3.svg')} alt='' />
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        kcloenard
                      </a>
                      <span className='text-muted fw-semibold d-block fs-7'>0x407...39e</span>
                    </td>
                    <td>
                      <span className='text-muted fw-semibold d-block fs-7'>Rating</span>
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
                        <div className='rating-label me-2'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                      </div>
                    </td>
                    <td className='text-end'>
                      <a href='#' className='btn btn-light-twitter btn-sm'>
                        Read Full Review
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-circle symbol-40px'>
                        <img src={toAbsoluteUrl('/media/svg/avatars/002-girl.svg')} alt='' />
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        jsimmons
                      </a>
                      <span className='text-muted fw-semibold d-block fs-7'>0x1e...489</span>
                    </td>
                    <td>
                      <span className='text-muted fw-semibold d-block fs-7'>Rating</span>
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
                    </td>
                    <td className='text-end'>
                      <a href='#' className='btn btn-light-twitter btn-sm'>
                        Read Full Review
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className='tab-pane fade' id='kt_table_widget_4_tab_2'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-140px'></th>
                    <th className='p-0 min-w-120px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-circle symbol-40px'>
                        <img src={toAbsoluteUrl('/media/svg/avatars/043-boy-18.svg')} alt='' />
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Kevin Leonard
                      </a>
                      <span className='text-muted fw-semibold d-block fs-7'>Art Director</span>
                    </td>
                    <td>
                      <span className='text-muted fw-semibold d-block fs-7'>Rating</span>
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
                        <div className='rating-label me-2'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                        <div className='rating-label me-2'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                      </div>
                    </td>
                    <td className='text-end'>
                      <a href='#' className='btn btn-light-twitter btn-sm'>
                        Read Full Review
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-circle symbol-40px'>
                        <img src={toAbsoluteUrl('/media/svg/avatars/014-girl-7.svg')} alt='' />
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Natali Trump
                      </a>
                      <span className='text-muted fw-semibold d-block fs-7'>UI/UX Designer</span>
                    </td>
                    <td>
                      <span className='text-muted fw-semibold d-block fs-7'>Rating</span>
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
                    </td>
                    <td className='text-end'>
                      <a href='#' className='btn btn-light-twitter btn-sm'>
                        Read Full Review
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-circle symbol-40px'>
                        <img src={toAbsoluteUrl('/media/svg/avatars/018-girl-9.svg')} alt='' />
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Jessie Clarcson
                      </a>
                      <span className='text-muted fw-semibold d-block fs-7'>HTML, CSS Coding</span>
                    </td>
                    <td>
                      <span className='text-muted fw-semibold d-block fs-7'>Rating</span>
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
                    </td>
                    <td className='text-end'>
                      <a href='#' className='btn btn-light-twitter btn-sm'>
                        Read Full Review
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-circle symbol-40px'>
                        <img src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')} alt='' />
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Brad Simmons
                      </a>
                      <span className='text-muted fw-semibold d-block fs-7'>Movie Creator</span>
                    </td>
                    <td>
                      <span className='text-muted fw-semibold d-block fs-7'>Rating</span>
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
                    </td>
                    <td className='text-end'>
                      <a href='#' className='btn btn-light-twitter btn-sm'>
                        Read Full Review
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className='tab-pane fade' id='kt_table_widget_4_tab_3'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-140px'></th>
                    <th className='p-0 min-w-120px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-circle symbol-40px'>
                        <img src={toAbsoluteUrl('/media/svg/avatars/018-girl-9.svg')} alt='' />
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Jessie Clarcson
                      </a>
                      <span className='text-muted fw-semibold d-block fs-7'>HTML, CSS Coding</span>
                    </td>
                    <td>
                      <span className='text-muted fw-semibold d-block fs-7'>Rating</span>
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
                    </td>
                    <td className='text-end'>
                      <a href='#' className='btn btn-light-twitter btn-sm'>
                        Read Full Review
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-circle symbol-40px'>
                        <img src={toAbsoluteUrl('/media/media/avatars/300-25.jpg')} alt='' />
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Lebron Wayde
                      </a>
                      <span className='text-muted fw-semibold d-block fs-7'>ReactJS Developer</span>
                    </td>
                    <td>
                      <span className='text-muted fw-semibold d-block fs-7'>Rating</span>
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
                        <div className='rating-label me-2'>
                          <i className='bi bi-star-fill fs-5'></i>
                        </div>
                      </div>
                    </td>
                    <td className='text-end'>
                      <a href='#' className='btn btn-light-twitter btn-sm'>
                        Read Full Review
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-circle symbol-40px'>
                        <img src={toAbsoluteUrl('/media/svg/avatars/014-girl-7.svg')} alt='' />
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Natali Trump
                      </a>
                      <span className='text-muted fw-semibold d-block fs-7'>UI/UX Designer</span>
                    </td>
                    <td>
                      <span className='text-muted fw-semibold d-block fs-7'>Rating</span>
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
                    </td>
                    <td className='text-end'>
                      <a href='#' className='btn btn-light-twitter btn-sm'>
                        Read Full Review
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
        </div>

        {/* end::Item */}
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
      {/* end::Body */}
    </div>
  )
}

export {ListsWidget2}

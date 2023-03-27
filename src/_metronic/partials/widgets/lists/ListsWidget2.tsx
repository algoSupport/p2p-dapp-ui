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
      <div className='card-header border-0'>
        <h3 className='card-title fw-bold text-dark'>Recent Reviews</h3>
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
          <Dropdown1 />
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-2 pb-5'>
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7'>
          {/* begin::Avatar */}
          <div className='symbol symbol-50px me-5'>
            <img src={toAbsoluteUrl('/media/avatars/300-6.jpg')} className='' alt='' />
          </div>
          {/* end::Avatar */}
          {/* begin::Text */}
          <div className='flex-grow-1'>
            <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
              0xb...339
            </a>
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
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7'>
          {/* begin::Avatar */}
          <div className='symbol symbol-50px me-5'>
            <img src={toAbsoluteUrl('/media/avatars/300-5.jpg')} className='' alt='' />
          </div>
          {/* end::Avatar */}
          {/* begin::Text */}
          <div className='flex-grow-1'>
            <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
              0x1...920
            </a>
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
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7'>
          {/* begin::Avatar */}
          <div className='symbol symbol-50px me-5'>
            <img src={toAbsoluteUrl('/media/avatars/300-11.jpg')} className='' alt='' />
          </div>
          {/* end::Avatar */}
          {/* begin::Text */}
          <div className='flex-grow-1'>
            <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
              0xe...505
            </a>
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
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7'>
          {/* begin::Avatar */}
          <div className='symbol symbol-50px me-5'>
            <img src={toAbsoluteUrl('/media/avatars/300-9.jpg')} className='' alt='' />
          </div>
          {/* end::Avatar */}
          {/* begin::Text */}
          <div className='flex-grow-1'>
            <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
              0xf...112
            </a>
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
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7'>
          {/* begin::Avatar */}
          <div className='symbol symbol-50px me-5'>
            <img src={toAbsoluteUrl('/media/avatars/300-23.jpg')} className='' alt='' />
          </div>
          {/* end::Avatar */}
          {/* begin::Text */}
          <div className='flex-grow-1'>
            <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
              0xf...8e1
            </a>
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
          </div>
          {/* end::Text */}
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

/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../helpers'

const ToolbarExtended: FC = () => {
  const [progress, setProgress] = useState<string>('1')
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    document.body.setAttribute('data-kt-app-toolbar-fixed', 'true')
  }, [])

  return (
    <>
      <div className='d-flex align-items-center flex-shrink-0 me-5'>
        {/* begin::Label */}
        <span className='fs-7 fw-bold text-gray-700 pe-4 d-none d-md-block'>
          1.9k+ Traders Online:
        </span>
        {/* end::Label */}

        {/* begin::Users */}
        <div className='symbol-group symbol-hover flex-shrink-0 me-2'>
          {/* begin::User */}
          <div className='symbol symbol-circle symbol-25px'>
            <div className='symbol-label fw-bold bg-warning text-inverse-warning'>0x</div>
          </div>
          {/* end::User */}

          {/* begin::User */}
          <div className='symbol symbol-circle symbol-25px'>
            <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='' />
          </div>
          {/* end::User */}

          {/* begin::User */}
          <div className='symbol symbol-circle symbol-25px'>
            <img src={toAbsoluteUrl('/media/avatars/300-2.jpg')} alt='' />
          </div>
          {/* end::User */}

          {/* begin::User */}
          <div className='symbol symbol-circle symbol-25px'>
            <div className='symbol-label fw-bold bg-primary text-inverse-primary'>S</div>
          </div>
          {/* end::User */}

          {/* begin::User */}
          <div className='symbol symbol-circle symbol-25px'>
            <img src={toAbsoluteUrl('/media/avatars/300-5.jpg')} alt='' />
          </div>
          {/* end::User */}

          {/* begin::User */}
          <div className='symbol symbol-circle symbol-25px'>
            <div className='symbol-label fw-bold bg-danger text-inverse-danger'>P</div>
          </div>
          {/* end::User */}

          {/* begin::User */}
          <div className='symbol symbol-circle symbol-25px'>
            <img src={toAbsoluteUrl('/media/avatars/300-20.jpg')} alt='' />
          </div>
          {/* end::User */}
        </div>
        {/* end::Users */}
      </div>
      {/* end::Button */}
      {/* end::Toolbar start */}

      {/* begin::Toolbar end */}
      <div className='d-flex align-items-center overflow-auto'>
        {/* begin::Search */}
        <div className='position-relative my-1'>
          <KTSVG
            path='/media/icons/duotune/general/gen021.svg'
            className='svg-icon-4 svg-icon-gray-500 position-absolute top-50 translate-middle ps-10'
          />
          <input
            type='text'
            className='form-control form-control-sm form-control-solid w-200px ps-10'
            name='Search Team'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search users and offers'
          />
        </div>
        {/* end::Search */}

        {/* begin::Separartor */}
        <div className='bullet bg-secondary h-35px w-1px mx-6'></div>
        {/* end::Separartor */}

        {/* begin::Label */}
        <span className='fs-7 fw-bold text-gray-700 flex-shrink-0 pe-4 d-none d-md-block'>
          Sort By:
        </span>
        {/* end::Label */}

        {/* begin::Select */}
        <select
          className='form-select form-select-sm w-125px form-select-solid me-6'
          data-control='select2'
          data-placeholder='Latest'
          data-hide-search='true'
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
        >
          <option value=''></option>
          <option value='1'>Rating</option>
          <option value='2'>Volume Traded</option>
          <option value='3'>Verified Only</option>
          <option value='3'>Reviews</option>
          <option value='3'>Online</option>
        </select>
        {/* end::Select */}

        {/* begin::Actions */}
        <div className='d-flex align-items-center'>
          <button
            type='button'
            className='btn btn-sm btn-icon btn-primary me-3'
            data-bs-toggle='tooltip'
            data-bs-placement='top'
            title='Enable grid view'
          >
            <KTSVG
              path='/media/icons/duotune/general/gen010.svg'
              className='svg-icon-4  svg-icon-gray-400'
            />
          </button>

          <button
            type='button'
            className='btn btn-sm btn-icon btn-light'
            data-bs-toggle='tooltip'
            data-bs-placement='top'
            title='Enable row view'
          >
            <KTSVG
              path='/media/icons/duotune/general/gen025.svg'
              className='svg-icon-4  svg-icon-primary'
            />
          </button>
        </div>
        {/* end::Actions */}
      </div>
    </>
  )
}

export {ToolbarExtended}

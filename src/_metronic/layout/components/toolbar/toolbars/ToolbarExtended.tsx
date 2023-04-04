/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../helpers'

const ToolbarExtended: FC = () => {
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    document.body.setAttribute('data-kt-app-toolbar-fixed', 'true')
  }, [])

  return (
    <>
      <div className='d-flex align-items-center flex-shrink-0 me-5'>
        {/* begin::Label */}
        <span className='fs-7 fw-bold text-gray-700 pe-4 d-none d-md-block'>Traders Online:</span>
        {/* end::Label */}

        {/* begin::Users */}
        <div className='symbol-group symbol-hover flex-shrink-0 me-2'>
          {/* begin::User 
          <div className='symbol symbol-circle symbol-25px'>
            <div className='symbol-label fw-bold bg-warning text-inverse-warning'>0x</div>
          </div>
          */}
          {/* end::User */}

          {/* begin::User 
          <div className='symbol symbol-circle symbol-25px'>
            <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='' />
          </div>
          */}
          {/* end::User */}
          <div className='symbol symbol-circle symbol-25px'>
            <div className='symbol-label fw-bold bg-primary text-inverse-warning'>0x</div>
          </div>
          <div className='symbol symbol-circle symbol-25px'>
            <div className='symbol-label fw-bold bg-danger text-inverse-warning'>0x</div>
          </div>
          <div className='symbol symbol-circle symbol-25px'>
            <div className='symbol-label fw-bold bg-info text-inverse-warning'>A</div>
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

        {/* end::Actions */}
      </div>
    </>
  )
}

export {ToolbarExtended}

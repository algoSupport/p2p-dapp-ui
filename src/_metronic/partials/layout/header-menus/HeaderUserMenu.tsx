/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {CreateAppModal} from '../../../partials'
import {useState} from 'react'

const HeaderUserMenu: FC = () => {
  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false)
  return (
    <>
      <a
        href='#'
        onClick={() => setShowCreateAppModal(true)}
        className='btn btn-sm btn-primary'
        data-bs-toggle='modal'
        data-bs-target='#kt_modal_create_app'
      >
        Verify Wallet
      </a>
      <CreateAppModal show={showCreateAppModal} handleClose={() => setShowCreateAppModal(false)} />
    </>
  )
}

export {HeaderUserMenu}

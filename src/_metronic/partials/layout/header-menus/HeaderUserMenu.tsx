/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {CreateAppModal} from '../../../partials'
import {useState} from 'react'
import {useVerify} from '../../../../hooks/useVerify'

const HeaderUserMenu: FC = () => {
  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false)
  const verified = useVerify()
  return !verified ? (
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
  ) : (
    <>
      <a
        href='#'
        // onClick={}
        className='btn btn-sm btn-primary'
        data-bs-toggle='modal'
        data-bs-target='#kt_modal_create_app'
      >
        Connect Wallet
      </a>
    </>
  )
}

export {HeaderUserMenu}

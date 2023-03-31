/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {Link} from 'react-router-dom'
import {useAuth} from '../../../../app/modules/auth'
import {Languages} from './Languages'
import {toAbsoluteUrl} from '../../../helpers'

const HeaderUserMenu: FC = () => {
  const {currentUser, logout} = useAuth()
  return (
    <a href='#' className='btn btn-primary btn-sm'>
      <span className='indicator-label'>Connect Wallet</span>
    </a>
  )
}

export {HeaderUserMenu}

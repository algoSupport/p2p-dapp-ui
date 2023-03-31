/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../../helpers'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      <div className='menu-item'>
        <div className='menu-content pt-0 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Marketplace</span>
        </div>
      </div>
      <SidebarMenuItem
        to='dashboard'
        icon='/media/icons/duotune/text/txt009.svg'
        title='Active listings'
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItem
        to=''
        icon='/media/icons/duotune/general/gen041.svg'
        title='Create an offer'
        fontIcon='bi-layers'
      />

      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Account</span>
        </div>
      </div>
      <SidebarMenuItem
        to=''
        title='Overview'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen032.svg'
      ></SidebarMenuItem>

      <SidebarMenuItem
        to=''
        icon='/media/icons/duotune/text/txt001.svg'
        title='Listings'
        fontIcon='bi-layers'
      />

      <SidebarMenuItem
        to=''
        title='History'
        icon='/media/icons/duotune/abstract/abs015.svg'
        fontIcon='bi-person'
      ></SidebarMenuItem>
      <SidebarMenuItem
        to=''
        title='Profile'
        fontIcon='bi-sticky'
        icon='/media/icons/duotune/general/gen049.svg'
      ></SidebarMenuItem>

      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Earn</span>
        </div>
      </div>
      <SidebarMenuItem
        to=''
        title='Staking'
        fontIcon='bi-sticky'
        icon='/media/icons/duotune/general/gen049.svg'
      ></SidebarMenuItem>

      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Protocol</span>
        </div>
      </div>
      <SidebarMenuItem
        to=''
        title='Statistics'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/graphs/gra003.svg'
      ></SidebarMenuItem>
      <SidebarMenuItem
        to=''
        icon='/media/icons/duotune/general/gen051.svg'
        title='Audit Reports'
        fontIcon='bi-layers'
      />
      <SidebarMenuItem
        to=''
        icon='/media/icons/duotune/general/gen048.svg'
        title='Governance'
        fontIcon='bi-layers'
      />
    </>
  )
}

export {SidebarMenuMain}

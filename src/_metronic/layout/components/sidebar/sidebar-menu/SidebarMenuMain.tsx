/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
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
        to='create-listing'
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
        to='overview'
        title='Overview'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen032.svg'
      ></SidebarMenuItem>

      <SidebarMenuItem
        to='my-listings'
        icon='/media/icons/duotune/text/txt001.svg'
        title='Listings'
        fontIcon='bi-layers'
      />

      <SidebarMenuItem
        to='history'
        title='History'
        icon='/media/icons/duotune/abstract/abs015.svg'
        fontIcon='bi-person'
      ></SidebarMenuItem>
      <SidebarMenuItem
        to='profile'
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
        to='staking'
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
        to='statistics'
        title='Statistics'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/graphs/gra003.svg'
      ></SidebarMenuItem>
      <SidebarMenuItem
        to='audits'
        icon='/media/icons/duotune/general/gen051.svg'
        title='Audit Reports'
        fontIcon='bi-layers'
      />
      <SidebarMenuItem
        to='governance'
        icon='/media/icons/duotune/general/gen048.svg'
        title='Governance'
        fontIcon='bi-layers'
      />
    </>
  )
}

export {SidebarMenuMain}

import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {CreateListing} from '../pages/CreateOffer'
import {Overview} from '../pages/Overview'
import {MyListings} from '../pages/MyListings'
import {Profile} from '../pages/Profile'
import {History} from '../pages/History'
import {Staking} from '../pages/Staking'
import {Statistics} from '../pages/Statistics'
import {Audits} from '../pages/Audits'
import {Governance} from '../pages/Governance'

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Pages */}
        <Route path='marketplace' element={<DashboardWrapper />} />
        <Route path='create-listing' element={<CreateListing />} />
        <Route path='overview' element={<Overview />} />
        <Route path='my-listings' element={<MyListings />} />
        <Route path='history' element={<History />} />
        <Route path='staking' element={<Staking />} />
        <Route path='profile' element={<Profile />} />
        <Route path='statistics' element={<Statistics />} />
        <Route path='audits' element={<Audits />} />
        <Route path='governance' element={<Governance />} />

        {/* Lazy Modules */}

        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='marketplace' />} />
      </Route>
    </Routes>
  )
}

export {PrivateRoutes}

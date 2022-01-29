import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CNav,
  CNavItem,
  CNavLink,
  CTabs,
  CTabContent,
  CTabPane,
  CListGroup,
  CListGroupItem,
  CSidebar,
  CSidebarClose,
  CRow,
  CCol
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { infoTako } from '../DummyDaTA'

const TheAside = () => {
  const show = useSelector(state => state.asideShow)
  const darkMode = useSelector(state => state.darkMode)
  const dispatch = useDispatch()
  const setState = (state) => dispatch({type: 'set', asideShow: state})
  const [showDetail, setShowDetail] = useState(false)

  
  return (
    <CSidebar
      aside
      colorScheme='light'
      size='lg'
      overlaid
      show={show}
      onShowChange={(state) => setState(state)}
    >
      <CSidebarClose onClick={() => setState(false) } />
      <CTabs>
        <CNav variant='tabs' className='nav-underline nav-underline-primary'>
          <CNavItem>
            <CNavLink>
              <CIcon name="cil-list" alt="CoreUI Icons List" />
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent>

          <CTabPane>
            <CListGroup accent>
              <CListGroupItem accent="info" href="#">
                <div className='d-flex align-items-center'>
                    <i class="ri-user-3-line pr-2" style={{ fontSize:"20px" }}/>
                    <strong> Pesanan Saya</strong>
                </div>
                <CRow>
                  <CCol xs="1"></CCol>
                  <CCol xs="9"><small className="text-muted mr-3">Semua pesanan mu di Cooffe Project dapat di lihat disini</small></CCol>
                  <CCol xs="1" className='p-0' style={{top:"-11px"}}><i class="ri-inbox-archive-line" style={{ fontSize:"30px", color:'#39f'}}/></CCol>
                </CRow>
              </CListGroupItem>
              <hr className="transparent mx-3 my-0" />
              <CListGroupItem accent="info" href="#" className="list-group-item-divider">
                <div className='d-flex align-items-center'>
                    <i class="ri-store-3-fill pr-2" style={{ fontSize:"20px" }}/>
                    <strong> Info Cooffe Project</strong>
                </div>
                <CRow>
                  <CCol xs="1"><CIcon name="cil-location-pin"/></CCol>
                  <CCol xs="10"><small className="text-muted mr-3">Batam - Sekupang, Patam Lestari, Kex Sekupang, Kota Batam, Kepulauan Riau 29424, Indonesia</small></CCol>
                </CRow>
                <CRow>
                  <CCol xs="1"><CIcon name="cil-baby"/></CCol>
                  <CCol xs="10">
                    {infoTako.map(data =>{
                        return (
                          showDetail ? (
                            <div className='d-flex justify-content-between'>
                              <div><small className="text-muted">{data.hari}</small></div>
                              <div><small className="text-muted">{data.info}</small></div>
                            </div>
                          ):''
                      )})}
                      <small className="text-blue" onClick={()=> setShowDetail(!showDetail)}>{showDetail ? 'Hidden Detail' : 'Show Detail'}</small>
                  </CCol>
                </CRow>
              </CListGroupItem>
              <CListGroupItem accent="info" href="#" className="list-group-item-divider" onClick={() => dispatch({type: 'set', darkMode: !darkMode})}>
                <div className='d-flex align-items-center'>
                      {darkMode ? (
                        <><i class="ri-sun-line mr-3"/><strong> Light Mode</strong></>
                      ):(
                        <><i class="ri-moon-line mr-3"/><strong> Dark Mode</strong></>
                      )}
                </div>
              </CListGroupItem>
            </CListGroup>
          </CTabPane>
        </CTabContent>
      </CTabs>
    </CSidebar>
  )
}

export default React.memo(TheAside)

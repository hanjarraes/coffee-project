import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CImg
} from '@coreui/react'

const TheHeader = () => {
  const dispatch = useDispatch()
  const asideShow = useSelector(state => state.asideShow)

  return (
    <CHeader withSubheader>
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <div className="c-avatar c-avatar-md">
          <CImg className="c-avatar-img" src="avatars/2.jpg" alt="admin@bootstrapmaster.com" />
        </div>
        <strong className='pl-2 font-2xl'>Coffe Project</strong> 
      </CHeaderBrand>
      <CHeaderNav>
        <dev inHeader>
          <i class="ri-shopping-cart-line font-2xl" />
        </dev>
        <span class="dot">3</span>
      </CHeaderNav>
      <CHeaderNav>
        <CToggler inHeader  onClick={() => dispatch({type: 'set', asideShow: !asideShow})}>
        <i class="ri-indent-decrease font-2xl" />
        </CToggler>
      </CHeaderNav>
    </CHeader>
  )
}

export default TheHeader

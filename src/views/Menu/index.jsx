import React, { useState, useEffect } from 'react'
import { CFooter, CButton } from '@coreui/react'
import { 
  KategoryMenu,
  coffee,
  all,
  NonCoffee,
  Tea,
  Makanan,
  Cemilan,
  MilkShake,
} from '../../DummyDaTA'
import ModalKategory from '../../Component/Modal/ModalKategory'
import CardMenu from '../../Component/CardMenu'

const Menu = () => {
  const [menuContent, setMenuContent] = useState(all);
  // dimension
  const [dimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight - 125,
  });
  const [showKategory, setShowKategory] = useState(false);
  const [activeKategory, setActiveKategory] = useState(0);

  const { width, height } = dimension;

  useEffect(() => {
    const handleResize = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight - 125,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return (
    <>
      <div className='content-menu overflow-auto' style={{height:height}}>
        {menuContent.map(data =>{
          return <CardMenu dataJudul={data.descriptionMenu} dataImg={data.imgMenu} />
        })}
      </div>
        <i class="ri-whatsapp-line buble-wa"/>
      <CFooter fixed={true} className='card-menu-kategory'>
        <div className='d-flex'>
            <CButton  variant="outline" color="info" className='mr-2 width-fit d-flex' onClick={() => setShowKategory(!showKategory)}>
                Kategori <i class="ri-arrow-up-s-line arrow-kategory" />
            </CButton>
          <div className='selection-menu' style={{width:width - 120}}>
            {KategoryMenu.map((data, idx) => {
            return  activeKategory === idx ? (
                        <CButton 
                          active 
                          variant="outline" 
                          className='mx-1 width-fit' 
                          onClick={() => setActiveKategory(idx)}
                          color="info">{data.nameKategory}</CButton> ):(
                          <CButton 
                          variant="outline" 
                          className='mx-1 width-fit' 
                          onClick={() => {
                            if(data.type === 'all') setMenuContent(all)
                            else if(data.type === 'coffee') setMenuContent(coffee)
                            else if(data.type === 'NonCoffee') setMenuContent(NonCoffee)
                            else if(data.type === 'MilkShake') setMenuContent(MilkShake)
                            else if(data.type === 'Cemilan') setMenuContent(Cemilan)
                            else if(data.type === 'Makanan') setMenuContent(Makanan)
                            else if(data.type === 'Tea') setMenuContent(Tea)
                            setActiveKategory(idx)
                          }}
                          color="info">{data.nameKategory}</CButton> )}
            )}              
          </div>
        </div>
    </CFooter>
    <ModalKategory 
      show={showKategory} 
      setShow={setShowKategory}
      setMenuContent={setMenuContent}
      setActiveKategory={setActiveKategory}/>
    </>
  )
}

export default Menu

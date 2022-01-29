import React from "react";
import { CModal, CModalBody } from "@coreui/react";
import { 
    KategoryMenu,
    coffee,
    all,
    NonCoffee,
    Tea,
    Makanan,
    Cemilan,
    MilkShake,
 } from '../../.../../../DummyDaTA'

const ModalKategory = ({ show, setShow, setActiveKategory, setMenuContent}) => {
    return (
        <CModal show={show} closeOnBackdrop={true}>
            <CModalBody>
                <h5>Kategory</h5>
                {KategoryMenu.map((data, idx) =>{
                    let totalMenu = ''
                        if(data.type === 'all') totalMenu = all.length
                        else if(data.type === 'coffee') totalMenu = coffee.length
                        else if(data.type === 'NonCoffee') totalMenu = NonCoffee.length
                        else if(data.type === 'MilkShake') totalMenu = MilkShake.length 
                        else if(data.type === 'Cemilan') totalMenu = Cemilan.length
                        else if(data.type === 'Makanan') totalMenu = Makanan.length 
                        else if(data.type === 'Tea') totalMenu = Tea.length 
                return <div className="pt-2" 
                            onClick={() => {
                                    if(data.type === 'all') setMenuContent(all)
                                    else if(data.type === 'coffee') setMenuContent(coffee)
                                    else if(data.type === 'NonCoffee') setMenuContent(NonCoffee)
                                    else if(data.type === 'MilkShake') setMenuContent(MilkShake)
                                    else if(data.type === 'Cemilan') setMenuContent(Cemilan)
                                    else if(data.type === 'Makanan') setMenuContent(Makanan)
                                    else if(data.type === 'Tea') setMenuContent(Tea)
                                    setShow(false); 
                                    setActiveKategory(idx)}} >
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <div className="text-modal-kategory">{data.nameKategory}</div>
                                    <div className="text-muted">{totalMenu} Product</div>
                                </div>
                                <div>
                                    <i class="ri-arrow-right-s-line font-2xl text-muted" />
                                </div>
                            </div>
                            <hr className="horizontal-line m-0" />
                        </div>
                })}
            </CModalBody>
        </CModal>
    );
};

export default ModalKategory
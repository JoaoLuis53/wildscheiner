import { useEffect, useState } from 'react';
import './Content.css';
import { Partner } from '../../types/partner';
import { api } from '../../utils/Api/partnerApi';


export const PagePart = () => {
    const [partners, setPartners] = useState<Partner[]>([]);


    useEffect(() => {
        UsePartners();
    }, []);

    const UsePartners = async () => {
        const partner = await api.getPartners();
        setPartners(partner);
    }

    return (
        <div className="part">
            {partners.map((item, index) => (
                <div key={index} className="partners">
                    <div className="post-part">
                        <div className="post-foto-part">
                            <img src={item.avatar} />
                        </div>
                        <div className="slug">
                            <p >Nome: {item.name} </p>
                            <p > Apelido: {item.surname}</p>
                            <p >Moto: {item.motorbike}</p>
                        </div>
                    </div>
                    <div className="part-post">
                        <img src={item.photo} />
                        <p >{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
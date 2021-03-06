import { doc,getDoc } from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { ProductBar } from '../ProductBar/ProductBar';
import './ItemDetailContainer.scss'
import cargando  from '../itemListContainer/cargando.gif'

export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState (false)
    const [item, setItem] = useState (null)

    const {itemId} = useParams()

    useEffect ( () => {
        setLoading(true)
        //1-armo la referencia
        const itemRef = doc (db,"productos", itemId)
        //2-pido la ref al doc
        getDoc(itemRef)
            .then((doc)=>{
               setItem({id: doc.id, ...doc.data()})
            })
            .finally(() => {
                setLoading(false)   
            })
            
    }, [itemId])

    return (
        <div className='container my-5'>
             <ProductBar/>
            {
                loading

                ? <>
                    <h2 className='title'>Loading..</h2>
                    <img src={cargando} alt='cargando'/>
                  </>
                    
                : <ItemDetail {...item}/>
            }
        </div>
    )
}
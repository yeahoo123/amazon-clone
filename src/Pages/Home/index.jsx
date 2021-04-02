import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Product from '../../components/Product/Product';
import {db} from '../../Data/Firebase'
function Home(props) {
    const [products, setProducts] = useState([])
    const getProducts = () => {
        db.collection('products').onSnapshot(snapshot=> {
            let temProduct = []
            temProduct = snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    product: doc.data()
                }
            )
        )
            setProducts(temProduct)
    })
}
    useEffect( ()=>{
     getProducts()
    },[])
    console.log(products)
    return (
        <Container>
            <Banner>

            </Banner>
            <Content>
                {products.map(data => (
                    <Product 
                        key = {data.id}
                        product = {data.product}
                    />
                ))}
            </Content>
        </Container>
    );
}

export default Home;

const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
`
const Banner = styled.div`
    background-image: url('https://i.imgur.com/SYHeuYM.jpg');
    min-height: 600px;
    background-position: center;
    background-size: cover;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`
const Content = styled.div`
    background: white;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: -350px;
    display: flex;
`
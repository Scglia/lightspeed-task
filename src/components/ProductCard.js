import React from "react";
import styled from "styled-components";

const Product = styled.div``;

const Thumbnail = styled.img`
  display: block;
  width: 100%;
`;

const ProductCard = ({ product, onClick }) => {
  const { image, title, price } = product;
  return (
    <Product>
      <Thumbnail src={image} alt={`Thumbnail for ${title}`} />
      <div>{title}</div>
      <div>{price}</div>
      <button onClick>Add to cart</button>
    </Product>
  );
};

export default ProductCard;

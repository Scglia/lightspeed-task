import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";

const Product = styled.div`
  background-color: white;
`;

const Thumbnail = styled.img`
  display: block;
  width: 100%;
`;

const Description = styled.div`
  padding: 10px;
`;

const Title = styled.div`
  height: 50px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductCard = ({ product, addToCart }) => {
  const { image, title, price, _id, stock } = product;
  return (
    <Product>
      <Link to={`/detail/${_id}`}>
        <Thumbnail src={image} alt={`Thumbnail for ${title}`} />
      </Link>
      <Description>
        <Title>
          <Link to={`/detail/${_id}`}>
            <div>{title}</div>
          </Link>
        </Title>
        <Bottom>
          <div>{price}</div>
          <AddToCartButton
            addToCart={addToCart}
            isSoldOut={stock.remaining === 0}
          />
        </Bottom>
      </Description>
    </Product>
  );
};

export default ProductCard;

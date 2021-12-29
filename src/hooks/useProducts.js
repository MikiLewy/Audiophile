import { useState, useEffect } from 'react';
import axios from 'axios';
export const query = `{
    allProducts {
      id
      name
      category
      feature
      price
      info
      description1
      description2
      amount
      content
      amount2
      content2
      amount3
      content3
      amount4
      content4
      amount5
      content5
      amount6
      content6
      gallery{
        id
        title
        url
      }
      productImg{
        id
        title
        url
      }
      cartImg{
        url
      }
    }
  }`;
export const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: query,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATO_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => setProducts(data.allProducts))
      .catch((e) => console.log(e));
  }, []);
  return products;
};

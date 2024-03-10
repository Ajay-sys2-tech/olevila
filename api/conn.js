import { gql, GraphQLClient } from "graphql-request";
import 'dotenv/config';

const storefrontAccessToken = process.env.STOREFRONTACCESSTOKEN;

const endpoint = process.env.SHOPURL;

console.log(storefrontAccessToken, endpoint);

const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
    },
  });

  export default async function getProducts() {
    const getAllProductsQuery = gql`
      {
        products(first: 5) {
          edges {
            node {
              id
              title
              handle
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              featuredImage {
                altText
                url
              }
            }
          }
        }
      }
    `;
    try {
        return await graphQLClient.request(getAllProductsQuery);
      } catch (error) {
        throw new Error(error);
      }
    }
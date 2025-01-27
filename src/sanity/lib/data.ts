import {client} from "@/sanity/lib/client"

export interface IProduct {
    _id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    galleryUrls?: string[];
    category: string;
    discountPercent: number;
    new: boolean | null;
    rating:number;
    colors: string[];
    sizes: string[];
  }

export const getAllProducts = async () =>{
    try {
        const queryAllProducts = `
      {
        "allProducts": *[_type == "products"]{_id,name,price,description,'imageUrl': image.asset->url,'galleryUrls': gallery[].asset->url,category,specialCategory,discountPercent,new,colors,rating,sizes},
        "newArrivalProducts": *[_type == "products" && specialCategory == "newArrival"]{_id,name,price,description,'imageUrl': image.asset->url,'galleryUrls': gallery[].asset->url,category,discountPercent,new,colors,rating,sizes},
        "topSellingProducts": *[_type == "products" && specialCategory == "topSelling"]{_id,name,price,description,'imageUrl': image.asset->url,'galleryUrls': gallery[].asset->url,category,discountPercent,new,colors,rating,sizes}
      }
    `;
        const products = await client.fetch(queryAllProducts)
        return products
    }
    catch(error){
        console.log(error)
    }
}
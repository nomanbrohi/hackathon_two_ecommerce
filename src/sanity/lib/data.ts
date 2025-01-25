import {client} from "@/sanity/lib/client"

export interface IProduct {
    _id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    galleryUrl?: string;
    category: string;
    discountPercent: number;
    new: boolean | null;
    colors: string[];
    sizes: string[];
  }

export const getAllProducts = async () =>{
    try {
        const queryAllProducts = "*[_type == 'products']{_id,name,price,description,'imageUrl': image.asset->url,'galleryUrls': gallery[].asset->url,category,discountPercent,new,colors,sizes}"
        const products = await client.fetch(queryAllProducts)
        return products
    }
    catch(error){
        console.log(error)
    }
}
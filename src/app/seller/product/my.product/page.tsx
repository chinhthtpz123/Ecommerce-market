import BreadCrumb from "../../_components/BreadCrumb";
import { IoAdd } from "react-icons/io5";
import ListProduct from "../../_components/ListProduct";

// Calling Api to get the product list with each product(product line) 

export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    image: string;
    decsription: string;
}


const products: Product[] = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
        stock: 10,
        image: "https://via.placeholder.com/150",
        decsription: "Description of product 1",
    },
    {
        id: 2,
        name: "Product 2",
        price: 200,
        stock: 20,
        image: "https://via.placeholder.com/150",
        decsription: "Description of product 2",
    },
    {
        id: 3,
        name: "Product 3",
        price: 300,
        stock: 30,
        image: "https://via.placeholder.com/150",
        decsription: "Description of product 3",
    },
    
]

export default function MyProduct() {
    return (
        <div className="bg-white border-0 border-none rounded-lg shadow-md h-full p-4 overflow-auto">
            <BreadCrumb />
            
            <div className='container mx-auto px-4'>
                <div className='flex justify-between items-center mt-4 '>
                    <div className=''>
                        <h2 className='text-base font-semibold text-custom'>All Product</h2>
                    </div>

                    <div>
                        <button className='flex flex-row border-0 border-none rounded-sm bg-sky-400 text-white p-2 cursor-pointer hover:transform-[translateY(-5px)] duration-200 ease-in-out'>
                            <IoAdd className='text-2xl'/>
                            <span className='ml-2'>Add New Product</span>
                        </button>
                    </div>
                </div>

                <div className='mt-4'>
                    <ListProduct products={products} />
                </div>

            </div>
        </div>
    );
}

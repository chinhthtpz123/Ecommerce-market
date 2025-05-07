
"use client";
import { useState } from "react";
import { type Product } from "../product/my.product/page";

export default function ListProduct({products} : { products: Product[]}) {
    const [isCheckAll, setIsCheckAll] = useState<boolean>(false);
    const [isChecked, setIsChecked] = useState<string[]>([]);

    const handleSelectAll = (e : React.ChangeEvent<HTMLInputElement>) => {
        setIsCheckAll(e.target.checked);
        setIsChecked(products.map(product => product.id.toString()));
        if(!e.target.checked) {
            setIsChecked([]);
        }
    }

    const handleSelected = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { id, checked } = e.target;
        if(checked) {
            setIsChecked((prev) => [...prev, id]);
        } else {
            setIsChecked((prev) => prev.filter(item => item !== id));
        }
    }

    console.log(isChecked);

    return (
        <>
            <div className="relative z-0 overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700">
                        <tr className="bg-gray-50">
                            <th scope="col" className="px-6 py-3">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded"
                                        onChange={handleSelectAll}
                                        checked={isCheckAll}
                                    />
                                    <span className="sr-only">Select all</span>
                                </label>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product(s)
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Stock
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200">
                        {products.map((product, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="px-6 py-4">
                                    <label className="">
                                        <input
                                            id={product.id.toString()}
                                            type="checkbox"
                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded"
                                            onChange={handleSelected}
                                            checked={isChecked.includes(
                                                product.id.toString()
                                            )}
                                        />
                                    </label>
                                </td>
                                <td className="px-6 py-4">Image</td>

                                <td className="px-6 py-4">{product.price}</td>
                                <td className="px-6 py-4">{product.stock}</td>
                                <td className="px-6 py-4">
                                    {product.decsription}
                                </td>
                                <td className="px-6 py-4 flex flex-col justify-center items-start flex-wrap">
                                    <button className="text-blue-600 hover:text-blue-900">
                                        Edit
                                    </button>
                                    <button className="text-red-600 hover:text-red-900">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

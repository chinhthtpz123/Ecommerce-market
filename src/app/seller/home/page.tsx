import SaleChart from "../_components/SaleChart";

const fakeOrder: number = 1000000;

export default function HomeSeller() {
    return (
        <div className="bg-white border-0 border-none rounded-lg shadow-sm h-full p-4 overflow-auto">
            <div>
                <h2 className="text-xl text-custom font-bold">
                    Sales Statistics
                </h2>
                <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 mt-3 ">
                    <div className="col-span-1 border-0 border-none h-30 p-4 rounded-md shadow-sm gap-y-5">
                        <h3 className="text-xl text-custom font-medium">
                            Sales
                        </h3>
                        <div className="text-gray-600 text-sm mt-2">
                            <span className="font-semibold">
                                Total Orders:{" "}
                            </span>
                            {fakeOrder.toLocaleString("en-Us")}
                        </div>

                        <div className="text-gray-600 text-sm mt-2">
                            <span className="font-semibold">
                                Total Revenue:{" "}
                            </span>
                            {fakeOrder.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                            })}
                        </div>
                    </div>
                    <div className="col-span-1 border-0 border-none h-30 p-4 rounded-md shadow-sm">
                        <h3 className="text-xl text-custom font-medium">
                            Customers
                        </h3>
                        <div className="text-gray-600 text-sm mt-2">
                            <span className="font-semibold">
                                Numbers of customer:{" "}
                            </span>
                            {fakeOrder.toLocaleString("en-US")}
                        </div>
                    </div>
                    <div className="col-span-1 border-0 border-none h-30 p-4 rounded-md shadow-sm">
                        <h3 className="text-xl text-custom font-medium">
                            Active Products
                        </h3>

                        <div className="text-gray-600 text-sm mt-2">
                            <span className="font-semibold">Inactive: </span>
                            {fakeOrder.toLocaleString("en-US")}
                        </div>

                        <div className="text-gray-600 text-sm mt-2">
                            <span className="font-semibold">Active: </span>
                            {fakeOrder.toLocaleString("en-US")}
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-8'>
                <h2 className='text-xl text-custom font-bold'>Charts</h2>
                <div className='grid grid-cols-3'>
                    <div className='mt-4 col-span-2 p-2'>
                        <SaleChart/>
                    </div>

                    <div className=''>

                    </div>
                </div>
            </div>
        </div>
    );
}

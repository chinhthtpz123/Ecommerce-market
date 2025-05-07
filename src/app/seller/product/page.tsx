import { redirect } from "next/navigation";

export default function ProductPage(): React.ReactElement {
    redirect("/seller/product/my.product");
}
import HeaderSeller from "@/_components/ui/seller/HeaderSeller";
import SideBarSeller from "@/_components/ui/seller/SideBarSeller";

export default function Layout({ children }: { children: React.ReactElement }) {
    return (
        <>
            <header className="h-20 px-6 sm:w-full bg-linear-to-l/hsl from-sky-50 to-sky-100">
                <HeaderSeller />
            </header>

            <main className="grid grid-cols-6">
                <section className="col-span-1 bg-white shadow-md">
                    <SideBarSeller />
                </section>

                <section className="col-span-5 bg-gray-100 p-4">{children}</section>
            </main>
        </>
    );
}

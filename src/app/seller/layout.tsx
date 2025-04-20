import HeaderSeller from "@/components/ui/seller/HeaderSeller";
import SideBarSeller from "@/components/ui/seller/SideBarSeller";

export default function Layout({ children }: { children: React.ReactElement }) {
    return (
        <>
            <header className="h-20 px-6 lg:container sm:w-full bg-linear-to-l/hsl from-sky-50 to-sky-100">
                <HeaderSeller />
            </header>

            <main className="lg:container grid grid-cols-6">
                <section className="col-span-1 bg-white shadow-md">
                    <SideBarSeller />
                </section>

                <section className="col-span-5">{children}</section>
            </main>
        </>
    );
}

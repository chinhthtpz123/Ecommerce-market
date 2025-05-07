import { HeaderLandingPage } from "@/_components/ui/Header";

export default function LayoutBuyer({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <header className="px-6 container bg-linear-to-r/hsl from-sky-50 to-sky-100 sticky top-0 z-10">
                {/* <NavigateHome /> */}
                <HeaderLandingPage />
            </header>

            <main>{children}</main>
        </>
    );
}

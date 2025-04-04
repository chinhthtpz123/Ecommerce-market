import HeaderSeller from "@/components/ui/seller/HeaderSeller";

export default function Layout({ children }: { children: React.ReactElement }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <HeaderSeller />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}

import { HeaderAuth } from "@/_components/ui/Header"

export default function LayoutAuth({
  children,
} : {
  children: React.ReactElement
}) : React.ReactNode {
  return (
    <>
      <HeaderAuth />
      <main>{children}</main>
    </>
  )
}
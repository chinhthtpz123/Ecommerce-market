// import { redirect } from "next/navigation";
// import type { AppProps } from "next/app";
// import Link from "next/link";

// export default function App({
//   Component,
//   pageProps: { session, ...pageProps },
// }: AppProps & { pageProps: { session: any } }) {
//   return (
//     <SessionProvider session={session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   )
// }

export default function App(): React.ReactElement {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

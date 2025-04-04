import LandingPage from '@/components/ui/landingPage';
import { HeaderLandingPage } from '@/components/ui/Header';

export default function Home() {

  return (
    <>
      <header className='p-2 bg-linear-to-r/hsl from-sky-50 to-sky-100 sticky top-0 z-10'>
        {/* <NavigateHome /> */}
        <HeaderLandingPage />
      </header>
      <main>
        <LandingPage/>
      </main>
    </>
  )
}
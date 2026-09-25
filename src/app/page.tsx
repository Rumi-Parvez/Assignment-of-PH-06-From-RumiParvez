import { Suspense } from "react";

import HeroPage from "./components/Hero";
import LibraryPage from "./components/Library";
import Loadingui from "./loading/loadingui";

export default function Home() {
  return (
    <>
    <Suspense fallback={<><Loadingui></Loadingui></>}>
      <HeroPage></HeroPage>
    <LibraryPage ></LibraryPage>
    </Suspense>
    
    </>
  );
}

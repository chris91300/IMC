import Formule from "./components/formule/Formule";
import TitleH1 from "./components/globals/titleH1/TitleH1";
import ImcCalculator from "./components/imcCalculator/ImcCalculator";
import Introduction from "./components/introduction/Introduction";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-2 py-10">
      <TitleH1>IMC</TitleH1>
      <Introduction />
      <Formule />
      <ImcCalculator />
    </main>
  )
}

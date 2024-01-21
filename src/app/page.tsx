
import H1 from "./_components/globals/headers/h1/H1";
import ImcCalculator from "./_components/imcCalculator/ImcCalculator";
import Introduction from "./_components/introduction/Introduction";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-2 py-10">
      <H1>IMC</H1>
      <Introduction />
      <ImcCalculator />
    </main>
  )
}

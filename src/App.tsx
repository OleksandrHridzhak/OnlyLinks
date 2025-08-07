import { LinkBox } from "./components/LinkBox/LinkBox"
import { LINKS } from "./constants/links"
import { Quote } from "./components/Quote/Quote"
import bgImage from './assets/bg2.jpg';



function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center w-full h-full flex flex-col items-center gap-4 py-10"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Quote>
        Progres over <br /> perfection
      </Quote>

      <ul className="w-full max-w-4xl flex flex-col items-center gap-4 px-4">
        {LINKS.map(({ label, link }) => (
          <li key={link} className="w-full flex justify-center">
            <LinkBox link={link}>{label}</LinkBox>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default App

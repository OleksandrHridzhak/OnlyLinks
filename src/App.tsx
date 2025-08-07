import { LinkBox } from "./components/LinkBox/LinkBox"
import { LINKS } from "./constants/links"
import { Quote } from "./components/Quote/Quote"

function App() {
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center w-full h-full"
        style={{ backgroundImage: "url('/bg2.jpg')" }}
      >
      <Quote>
        Progres over <br/> perfection
      </Quote>
      <ul className="flex flex-col gap-2">
        {LINKS.map(({label, link}) => (
          <li>  
            <LinkBox link={link}>
              {label}
            </LinkBox>
          </li>
        ))}

      </ul>
      </div>
    </>
  )
}

export default App

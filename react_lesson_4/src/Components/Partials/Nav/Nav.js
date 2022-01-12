import Style from './nav.module.scss'

export const Nav = (props) => {

  const myLinks = [
    "Forside",
    "Produkter",
    "Om os",
    "Ledige stillinger",
    "Kontakt os"
  ]


  return (
    <>
    <nav className={Style.mynav}>
      {myLinks.map((item, index) => {
        return <a className={Style.myatags} href="#" key={index}>{item}</a>
      })}
    </nav>
    
    </>
  )
}

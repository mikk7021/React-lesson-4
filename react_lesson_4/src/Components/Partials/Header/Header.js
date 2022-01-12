import Style from './header.module.scss'

export const Header = (props) => {

  const pagetitle = (props.pagetitle) ? props.pagetitle : 'React Lesson 4'

  return (
    <header className={Style.myheader}>
      <h1 className={Style.myh1}>{pagetitle}</h1>
    </header>
  )
}
import Style from './footer.module.scss'
import { Nav } from '../Nav/Nav'

export const Footer = () => {
  return (
    <footer className={Style.myfooter}>
      <Nav/>
    </footer>
  )
}

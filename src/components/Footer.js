import {Link} from 'react-router-dom'

const Footer = () => {
    return     <footer class="footer">
    <h3 class="footer__title">Follow company</h3>

    <div class="footer__social">
      <Link to="https://www.facebook.com" class="footer__social-link"
        ><i class="bx bxl-facebook"></i
      ></Link>
      <Link to ="https://www.instagram.com" class="footer__social-link"
        ><i class="bx bxl-instagram"></i
      ></Link>
      <Link to="https://www.toktok.com" class="footer__social-link"
        ><i class="bx bxl-tiktok"></i
      ></Link>
    </div>
  </footer>
}

export default Footer;
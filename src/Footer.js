function Footer(props) {
  return (
    <footer class="footer">
      <div class="footer__above">
        <img src="https://assets.jiji.ng/static/img/footer-nigeria.svg" alt="" />
      </div>
      <div class="footer__main">
        <div class="footer__menu-wrapper">
          <div class="container footer__container">
            <div class="footer__menu-item-wrapper ">
              <h4>About us</h4>
              <ul>
                <li><a href="#">About Jiji</a></li>
                <li><a href="#">We are hiring!</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Billing Policy</a></li>
                <li><a href="#">Cookie policy</a></li>
              </ul>
            </div>

            <div class="footer__menu-item-wrapper">
              <h4>Support</h4>
              <ul>
                <li><a href="#">support@jiji.ng</a></li>
                <li><a href="#">Safety Tips</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>

            <div class="footer__menu-item-wrapper">
              <h4>Our apps</h4>
              <ul>
                <li><a href="#"><img src="https://assets.jiji.ng/static/img/single-images/ios.svg" alt="" /></a></li>
                <li><a href="#"><img src="https://assets.jiji.ng/static/img/single-images/android.svg" alt="" /></a></li>
              </ul>
            </div>

            <div class="footer__menu-item-wrapper">
              <h4>Our resources</h4>
              <ul>
                <li><a href="#">Our blog</a></li>
                <li><a href="#">Jiji on FB</a></li>
                <li><a href="#">Our Instagram</a></li>
                <li><a href="#">Our Youtube</a></li>
                <li><a href="#">Our Twitter</a></li>
              </ul>
            </div>

            <div class="footer__menu-item-wrapper">
              <h4>Hot links</h4>
              <ul>
                <li><a href="#">Brand</a></li>
                <li><a href="#">Jiji Sellers</a></li>
                <li><a href="#">Regions</a></li>
                <li><a href="#">Jiji Africa</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer__copyright">© 2021 Jiji.ng</div>
      </div>
    </footer>
  );
}

export default Footer;

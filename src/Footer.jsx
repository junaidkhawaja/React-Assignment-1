const Footer = () => {
return <>
<div class="footer-section">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="links">
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="copyright">
                    &copy; GitLan - All Rights Reserved.
                </div>
            </div>
            <div class="col-md-6 d-flex justify-content-end align-items-center">
                <div class="social-icons">
                    <ul>
                        <li>
                            <a href="#">
                                <img src="./assets/img/facebook.png" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="./assets/img/twitter.png" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="./assets/img/instagram.png" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</>
}

export default Footer
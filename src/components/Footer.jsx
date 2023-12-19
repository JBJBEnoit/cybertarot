
import { Link } from 'react-router-dom';
import '../App.css';
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    PinterestIcon,
    PinterestShareButton,
    RedditIcon,
    RedditShareButton,
    TumblrIcon,
    TumblrShareButton,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,
    XIcon,
  } from "react-share";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="share-container">
                <FacebookShareButton url="https://cybertarot.ai/">
                    <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <TwitterShareButton url="https://cybertarot.ai/">
                    <XIcon size={32} round={true} />
                </TwitterShareButton>
                <RedditShareButton url="https://cybertarot.ai/">
                    <RedditIcon size={32} round={true} />
                </RedditShareButton>
                <TumblrShareButton url="https://cybertarot.ai/">
                    <TumblrIcon size={32} round={true} />
                </TumblrShareButton>
                <LinkedinShareButton url="https://cybertarot.ai/">
                    <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>
                <WhatsappShareButton url="https://cybertarot.ai/">
                    <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>
                <PinterestShareButton url="https://cybertarot.ai/">
                    <PinterestIcon size={32} round={true} />
                </PinterestShareButton>
                <EmailShareButton url="https://cybertarot.ai/">
                    <EmailIcon size={32} round={true} />
                </EmailShareButton>
            </div>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8335335873732696"
     crossOrigin="anonymous"></script>
            <div className="footer-container">
                <p>&copy; 2023 Jason Benoit. Content for entertainment purposes only.</p>
                <p><Link to="/terms-of-use">Terms of Use</Link></p>
                <p><Link to="/privacy-policy">Privacy Policy</Link></p>
            </div>
        </footer>
    );
};

export default Footer;

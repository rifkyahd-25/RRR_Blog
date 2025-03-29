import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  LinkedinShareButton,
} from "react-share";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
const ShareButtons = ({ url, title }) => {
  return (
    <div className="flex space-x-3 self-center">
      <FacebookShareButton url={url} quote={title}>
        <FaFacebook size={32} className="text-blue-600 hover:text-blue-800" />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title}>
        <FaTwitter size={32} className="text-blue-400 hover:text-blue-600" />
      </TwitterShareButton>

      <WhatsappShareButton url={url} title={title}>
        <FaWhatsapp size={32} className="text-green-500 hover:text-green-700" />
      </WhatsappShareButton>
      <PinterestShareButton url={url} title={title}>
        <FaPinterest size={32} className="text-red-600 hover:text-red-800" />
      </PinterestShareButton>
      <LinkedinShareButton url={url} title={title}>
        <FaLinkedin size={32} className="text-blue-700 hover:text-blue-900" />
      </LinkedinShareButton>
    </div>
  );
};

export default ShareButtons;

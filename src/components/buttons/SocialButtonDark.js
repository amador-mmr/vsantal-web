import React from 'react';
import ReactTooltip from 'react-tooltip';
import './SocialButton.css';
import { AmazonDarkIcon,
 AmazonWhiteIcon,
 FacebookDarkIcon,
 InstagramDarkIcon,
 TwitterDarkIcon,
 TwitterWhiteIcon,
 YoutubeWhiteIcon,
 SpotifyDarkIcon,
 SpotifyWhiteIcon,
 ItunesDarkIcon
} from '../../images/social';


function GetIcon(id) {
  switch(id) {
      case 1: return (AmazonDarkIcon);
      case 2: return (AmazonWhiteIcon);
      case 3: return(FacebookDarkIcon);
      case 4: return(InstagramDarkIcon);
      case 5: return(TwitterDarkIcon);
      case 6: return(TwitterWhiteIcon);
      case 7: return(YoutubeWhiteIcon);
      case 8: return(SpotifyDarkIcon);
      case 9: return(SpotifyWhiteIcon);
      case 10: return(ItunesDarkIcon);
      default: return (FacebookDarkIcon);
  }
}

function SocialButtonDark(props) {

  return (
    <li className="social-btn-icon" >
        <a href={props.data.route} target="_blank" rel="noopener noreferrer">
            <img src={GetIcon(props.data.id)} alt={props.data.tooltip} data-tip={props.data.tooltip} />
            <ReactTooltip effect="solid" type="light" className="tooltip-social-btn" />
        </a>
    </li>
  );
}

export default SocialButtonDark;
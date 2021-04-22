import React from 'react';
import ReactTooltip from 'react-tooltip';
import './SocialButton.css';
import { FacebookIcon,
  YoutubeIcon,
  InstagramIcon,
  TwitterIcon,
  SpotifyIcon,
  ItunesIcon,
  GPlayIcon
} from './../../images/social';


function GetIcon(id) {
  switch(id) {
      case 1: return (FacebookIcon);
      case 2: return (YoutubeIcon);
      case 3: return(InstagramIcon);
      case 4: return(TwitterIcon);
      case 5: return(SpotifyIcon);
      case 6: return(ItunesIcon);
      case 7: return(GPlayIcon);
      default: return (FacebookIcon);
  }
}

function SocialButton(props) {

  let reduceIcon = "social-btn-icon" + (props.data.id === 7 ? " reduce-icon" : "");

  return (
    <li className={reduceIcon} >
        <a href={props.data.route} target="_blank" rel="noopener noreferrer">
            <img src={GetIcon(props.data.id)} alt={props.data.tooltip} data-tip={props.data.tooltip} />
            <ReactTooltip effect="solid" type="light" className="tooltip-social-btn" />
        </a>
    </li>
  );
}

export default SocialButton;
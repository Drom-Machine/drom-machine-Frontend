import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Menu(props) {
    const { 
        sounds_Button, 
        stories_Button, 
        journey_Button, 
        scenes_Button, 
        moon_Icon 
    } = props;

    return (
        <div 
            className=
            "container-center-horizontal"
            >
            <div 
                className=
                "menu screen"
                >
                <MoonRedialMainMenu 
                    className=
                    "smart-layers-pointers animate-enter"
                    >
                    <Link 
                        to="/sounds" 
                        onClick=
                        {window.event.stopPropagation()}
                        >
                        <SoundsButton 
                        className=
                        "smart-layers-pointers" 
                        src={sounds_Button} 
                        />
                    </Link>
                    <OverlapGroup>
                        <Link 
                        to=
                        "/settings" 
                        onClick=
                        {window.event.stopPropagation()}
                        >
                        <StoriesButton 
                        className=
                        "smart-layers-pointers" 
                        src={stories_Button} />
                        </Link>
                        <Link 
                        to="/turn-screen" 
                        onClick={window.event.stopPropagation()}
                        >
                        <JourneyButton 
                        className=
                        "smart-layers-pointers" 
                        src={journey_Button} 
                        />
                        </Link>
                    </OverlapGroup>
                <Link 
                to=
                "/scene-playlist" 
                onClick=
                {window.event.stopPropagation()}
                    >
                    <ScenesButton 
                    className=
                    "smart-layers-pointers" 
                    src={scenes_Button} 
                    />
                </Link>
                <MoonIcon 
                className=
                "smart-layers-pointers" 
                src={moon_Icon} 
                />
                </MoonRedialMainMenu>
            </div>
        </div>
    );
}




const MoonRedialMainMenu = styled.div`
  width: 285px;
  height: 290px;
  position: relative;
  margin-top: 294.26px;
  transition: all 0.2s ease;
  pointer-events: auto;

  &.animate-enter {
    animation: animate-enter-frames 0.2s ease 0s 1 normal forwards;
    opacity: 0;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const SoundsButton = styled.img`
  position: absolute;
  width: 81px;
  height: 76px;
  top: 111px;
  left: 204px;
  transition: all 0.2s ease;
  object-fit: cover;
  pointer-events: auto;
  cursor: pointer;

  &:hover {
    transform: translate(5px, 0);
  }
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 204px;
  height: 209px;
  top: 0;
  left: 0;
`;

const StoriesButton = styled.img`
  position: absolute;
  width: 107px;
  height: 110px;
  top: 99px;
  left: 0;
  transition: all 0.2s ease;
  object-fit: cover;
  pointer-events: auto;
  cursor: pointer;

  &:hover {
    transform: translate(-5px, 0);
  }
`;

const JourneyButton = styled.img`
  position: absolute;
  width: 108px;
  height: 111px;
  top: 0;
  left: 96px;
  transition: all 0.2s ease;
  object-fit: cover;
  pointer-events: auto;
  cursor: pointer;

  &:hover {
    transform: translate(0, -5px);
  }
`;

const ScenesButton = styled.img`
  position: absolute;
  width: 86px;
  height: 81px;
  top: 209px;
  left: 107px;
  transition: all 0.2s ease;
  object-fit: cover;
  pointer-events: auto;
  cursor: pointer;

  &:hover {
    transform: rotate(15deg);
  }
`;

const MoonIcon = styled.img`
  position: absolute;
  width: 86px;
  height: 85px;
  top: 111px;
  left: 107px;
  transition: all 0.2s ease;
  object-fit: cover;
  pointer-events: auto;

  &:hover {
    transform: scale(0.9);
  }
`;



export default Menu;

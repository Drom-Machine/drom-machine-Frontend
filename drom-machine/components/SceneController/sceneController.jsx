import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function SceneController(props) {
  const {
    backarrowbutton,
    sceneplaylisttext,
    text3,
    text4,
    albumcover,
    text1,
    text2,
    rangesliderbox,
    audiobuttonbackwards,
    audiobuttonplay,
    audiobuttonforward,
    halfmoon_Return_Button,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="scene-controller screen">
        <ScenePlaylistField>
          <Link to="/scene-playlist">
            <BackArrowButton className="smart-layers-pointers" src={backarrowbutton} />
          </Link>
          <ScenePlaylistText src={sceneplaylisttext} />
        </ScenePlaylistField>
        <OverlapGroup>
          <PlaylistName className="animate-enter1">
            <Text3>{text3}</Text3>
            <Text4>{text4}</Text4>
          </PlaylistName>
          <AlbumCover src={albumcover} />
          <SceneArt className="animate-enter2">
            <SceneArtCircle>
              <iframe
                style={{ border: 0 }}
                id="ytplayer"
                type="text/html"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/t2QrDbweeu4?rel=0&mute=1&autoplay=1"
                frameborder="0"
                allowfullscreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen"
                msallowfullscreen="msallowfullscreen"
                oallowfullscreen="oallowfullscreen"
                webkitallowfullscreen="webkitallowfullscreen"
              ></iframe>
            </SceneArtCircle>
          </SceneArt>
        </OverlapGroup>
        <AudioPlayerTrack className="animate-enter">
          <Text1>{text1}</Text1>
          <Text2>{text2}</Text2>
          <RangeSliderBox src={rangesliderbox} />
        </AudioPlayerTrack>
        <AudioPlayerButtons>
          <AudioButtonBackwards 
            className=
              "smart-layers-pointers" 
                src={audiobuttonbackwards} 
                />
          <AudioButtonPlay 
            className=
              "smart-layers-pointers" 
                src={audiobuttonplay} 
                  />
          <AudioButtonForward 
            className=
              "smart-layers-pointers" 
                src={audiobuttonforward} 
                  />
        </AudioPlayerButtons>
        <Link to="/menu">
          <HalfMoonReturnButton className="smart-layers-pointers animate-enter3" src={halfmoon_Return_Button} />
        </Link>
      </div>
    </div>
  );
}

const ScenePlaylistField = styled.div`
  margin-left: 42px;
  display: flex;
  align-items: flex-start;
  min-width: 217px;
`;

const BackArrowButton = styled.img`
  width: 7px;
  height: 10px;
  transition: all 0.2s ease;
  object-fit: cover;
  pointer-events: auto;
  cursor: pointer;

  &:hover {
    transform: translate(-5px, 0);
  }
`;

const ScenePlaylistText = styled.img`
  width: 92px;
  height: 16px;
  margin-left: 117px;
  object-fit: cover;
`;

const OverlapGroup = styled.div`
  width: 414px;
  height: 441px;
  position: relative;
  margin-top: 49px;
  margin-left: 0;
`;

const PlaylistName = styled.div`
  position: absolute;
  width: 170px;
  height: 38px;
  top: 403px;
  left: 124px;

  &.animate-enter1 {
    animation: animate-enter1-frames 0.2s ease 0s 1 normal forwards;
    opacity: 0;
  }
`;

const Text3 = styled.div`
  position: absolute;
  top: 22px;
  left: 26px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Text4 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const AlbumCover = styled.img`
  position: absolute;
  width: 236px;
  height: 221px;
  top: 89px;
  left: 90px;
  object-fit: cover;
`;

const SceneArt = styled.div`
  position: absolute;
  width: 414px;
  height: 414px;
  top: 0;
  left: 0;

  &.animate-enter2 {
    animation: animate-enter2-frames 0.2s ease 0s 1 normal forwards;
    opacity: 0;
  }
`;

const SceneArtCircle = styled.div`
  position: relative;
  width: 370px;
  height: 370px;
  top: 21px;
  left: 21px;
  border-radius: 184.92px;
`;

const AudioPlayerTrack = styled.div`
  width: 342px;
  height: 40px;
  position: relative;
  align-self: center;
  margin-top: 23px;
  margin-left: 0;

  &.animate-enter {
    animation: animate-enter-frames 0.2s ease 0s 1 normal forwards;
    opacity: 0;
  }
`;

const Text1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const Text2 = styled.div`
  position: absolute;
  top: 0;
  left: 302px;
  text-align: center;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const RangeSliderBox = styled.img`
  position: absolute;
  width: 343px;
  height: 22px;
  top: 18px;
  left: 0;
  object-fit: cover;
`;

const AudioPlayerButtons = styled.div`
  align-self: center;
  margin-top: 49px;
  margin-left: 2px;
  display: flex;
  align-items: center;
  min-width: 260px;
`;

const AudioButtonBackwards = styled.img`
  width: 33px;
  height: 34px;
  margin-bottom: 0.05px;
  transition: all 0.2s ease;
  object-fit: cover;
  pointer-events: auto;

  &:hover {
    transform: translate(-5px, 0);
  }
`;

const AudioButtonPlay = styled.img`
  width: 107px;
  height: 100px;
  margin-left: 44px;
  transition: all 0.2s ease;
  object-fit: cover;
  pointer-events: auto;

  &:hover {
    transform: scale(0.9);
  }
`;

const AudioButtonForward = styled.img`
  width: 33px;
  height: 34px;
  margin-left: 42px;
  margin-bottom: 0.05px;
  transition: all 0.2s ease;
  object-fit: cover;
  pointer-events: auto;

  &:hover {
    transform: translate(5px, 0);
  }
`;

const HalfMoonReturnButton = styled.img`
  width: 78px;
  height: 85px;
  margin-top: 6px;
  margin-left: 17.29px;
  transition: all 0.2s ease;
  object-fit: cover;
  display: block;
  pointer-events: auto;
  cursor: pointer;

  &.animate-enter3 {
    display: block;
    animation: animate-enter3-frames 0.2s ease 0s 1 normal forwards;
    opacity: 0;
  }

  &:hover {
    transform: rotate(15deg);
  }
`;

export default SceneController;

import styled from 'styled-components';
import { MoreVertIcon } from '../components/Icons/MoreVert';
import { ChevronIcon } from '../components/Icons/ChevronIcon';
import { LinearGradient } from 'expo-linear-gradient'
import { PlayIcon } from '../components/Icons/PlayIcon';
import CodAi from '../mocks/projects/CodAi/codAi.png'
import { Button } from 'react-native';
import SelectModal from '../components/SelectModal';
import { useState } from 'react';

const Background = ({ children }) => {

  return(
    <LinearGradient 
      colors={["#464769", "#1B1A1F"]}
      style={{
        flex: 1,
        paddingTop: 60
      }}
    >
      {children}
    </LinearGradient>

  )
}

const TopBar = styled.View`
  flex-direction: row;
`;

TopBar.Left = styled.View`
  flex: 1;
  padding-left: 15px;
`;
TopBar.Middle = styled.View`
  flex: 2;
  align-items: center;
`;
TopBar.Right = styled.View`
  flex: 1;
  align-items: flex-end;
  padding-right: 15px;
`;

TopBar.Title = styled.Text`
  color: white; 
  text-transform: uppercase;
`;
TopBar.Subtitle = styled.Text`
  color: white;
  font-weight: bold;
`;

// ===================================

const ScreenArea = styled.View`
  flex: 1;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 32px;
`;

const CoverArea = styled.View`
  flex: 4;
`;

CoverArea.Image = styled.Image`
  width: 100%;
  flex: 1;

`;

const PlayerArea = styled.View`
  flex: 2;
  justify-content: flex-end;
`;

PlayerArea.Title = styled.Text`
  color: white;
  font-size: 24px;
`;

PlayerArea.Author = styled.Text`
  color: #BBBBBB;
  font-size: 16px;
`;

const Controls = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

Controls.Slider = styled.View`
  flex-basis: 100%;
  width: 100%; 
  flex-direction: row;
  justify-content: space-between;
`;

Controls.Slider.CurrentTime = styled.Text`
  color: #bbbbbb;
`;
Controls.Slider.TotalTime = styled.Text`
  color: #bbbbbb;
`;

Controls.Play = styled.TouchableOpacity``;

const ButtonChevron = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
`;

// ===================================


export default function PlayerScreen() {
  const [modalChevron ,setModalChevron] = useState(false)

  const handleOpenModal = () => {
    setModalChevron(true)
  } 

  const handleCloseModal = () => {
    setModalChevron(false)
  }

  return (
    <Background>
      <TopBar>

        <TopBar.Left>
          <ButtonChevron 
            onPress={handleOpenModal}
          >
            <ChevronIcon />
          </ButtonChevron>
        </TopBar.Left>

        {modalChevron ? <SelectModal statusModal={true} onCloseModal={handleCloseModal}/> : null}

        <TopBar.Middle>
          <TopBar.Title>Rodando website</TopBar.Title>
          <TopBar.Subtitle>CodAI</TopBar.Subtitle>
        </TopBar.Middle>

        <TopBar.Right>
          <MoreVertIcon />
        </TopBar.Right>
      </TopBar>

      <ScreenArea>
        <CoverArea>
          <CoverArea.Image
            resizeMode='contain'
            source={CodAi}
          />
        </CoverArea>

        <PlayerArea>
          <PlayerArea.Title>
            CodAI - Crie códigos em seg...
          </PlayerArea.Title>
          
          <PlayerArea.Author>
            Plusoft - website using IA
          </PlayerArea.Author>
        </PlayerArea>   

        <Controls>
          <Controls.Slider>
            <Controls.Slider.CurrentTime>
              0:01
            </Controls.Slider.CurrentTime>

            <Controls.Slider.TotalTime>
              52:04
            </Controls.Slider.TotalTime>
          </Controls.Slider>

          <Controls.Play>
            <PlayIcon 
              width={88}
              height={88}
            />
          </Controls.Play>

        </Controls>     

      </ScreenArea>


    </Background>
  );
}

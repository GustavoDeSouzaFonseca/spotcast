import styled from 'styled-components';
import { MoreVertIcon } from '../components/Icons/MoreVert';
import { ChevronIcon } from '../components/Icons/ChevronIcon';
import { LinearGradient } from 'expo-linear-gradient'

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


export default function PlayerScreen() {
  return (
    <Background>

      <TopBar>

        <TopBar.Left>
          <ChevronIcon />
        </TopBar.Left>

        <TopBar.Middle>
          <TopBar.Title>Tocando Podcast</TopBar.Title>
          <TopBar.Subtitle>Hipsters Ponto Tech</TopBar.Subtitle>
        </TopBar.Middle>

        <TopBar.Right>
          <MoreVertIcon />
        </TopBar.Right>

      </TopBar>
    </Background>
  );
}

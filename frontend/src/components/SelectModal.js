import React from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components';

const ModalChevron = styled.View`
  margin-top: 60px;
  margin-left: 16px;
  padding: 20px;
  width: 200px;
  height: 300px;
  background-color: #1B1A1F;
  border-radius: 10px;
`;

const ButtonModal = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  background-color: transparent;
  margin-bottom: 8px;
  box-shadow: 0px 5px 5px;
  justify-content: space-around;
`;
ButtonModal.Settings = styled.Text`
  font-size: 20px;
  color: white;
`;
ButtonModal.MyPlaylist = styled.Text`
  font-size: 20px;
  color: white;
`;
ButtonModal.MyAccount = styled.Text`
  font-size: 20px;
  color: white;
`;

ButtonModal.Cancel = styled.Text`
  font-size: 20px;
  color: white;
`;

const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: #bbbbbb;
`;

function SelectModal({statusModal, onCloseModal}) {
  const handleCloseModal = () => {
    if(onCloseModal) {
      onCloseModal();
    }
  }

  return (
    <Modal
      visible={statusModal}
      transparent={true}
      // animationType="slide"
    >
      <ModalChevron>
        <ButtonModal>
          <ButtonModal.Settings>Settings</ButtonModal.Settings>
          <Line/>
        </ButtonModal>
        <ButtonModal>
          <ButtonModal.MyPlaylist>My Playlist</ButtonModal.MyPlaylist>
          <Line/>
        </ButtonModal>
        <ButtonModal>
          <ButtonModal.MyAccount>My Account</ButtonModal.MyAccount>
          <Line/>
        </ButtonModal>
        <ButtonModal
          onPress={handleCloseModal}
        >
          <ButtonModal.Cancel>Cancel</ButtonModal.Cancel>
        </ButtonModal>

      </ModalChevron>
    </Modal>
  );
}

export default SelectModal;
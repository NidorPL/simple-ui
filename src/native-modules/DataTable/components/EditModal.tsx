import { Button, Modal, TextInput, Title } from "react-native-paper";
import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components/native";

export const EditModal = ({
  tableRow,
  tableFields,
  isModalOpen,
  setModalOpen,
  connection,
  api,
  refetch,
}: {
  tableRow: object;
  tableFields: string[];
  isModalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  connection: object;
  api: any;
  refetch: () => void;
}) => {
  const [elementToEdit, setElementToEdit] = React.useState(tableRow);

  const hideModal = () => setModalOpen(false);

  const containerStyle = { backgroundColor: "white", padding: 20 };

  const editData = async () => {
    await api.editTableData({
      connection,
      newData: elementToEdit,
    });
    refetch();
    setModalOpen(false);
  };

  return (
    <Modal
      visible={isModalOpen}
      onDismiss={hideModal}
      contentContainerStyle={containerStyle}
    >
      <Title>Edit Data</Title>
      {tableFields.map((tableField) => (
        <TextInput
          key={tableField}
          label={tableField}
          // @ts-ignore
          value={elementToEdit[tableField.toLowerCase()]}
          onChangeText={(text) => {
            setElementToEdit({
              ...elementToEdit,
              [tableField.toLowerCase()]: text,
            });
            console.log(elementToEdit);
          }}
        />
      ))}
      <EditModalFooter>
        <Button onPress={() => editData(tableRow)}>Edit</Button>
        <Button
          onPress={() => {
            setModalOpen(false);
          }}
        >
          Close
        </Button>
      </EditModalFooter>
    </Modal>
  );
};

const EditModalFooter = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 50px;
`;

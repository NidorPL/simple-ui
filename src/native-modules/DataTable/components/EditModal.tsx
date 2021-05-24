import { Modal, Text, TextInput, Title } from "react-native-paper";
import React, { Dispatch, SetStateAction } from "react";

export const EditModal = ({
  tableRow,
  tableFields,
  isModalOpen,
  setModalOpen,
}: {
  tableRow: object;
  tableFields: string[];
  isModalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const hideModal = () => setModalOpen(false);

  const containerStyle = { backgroundColor: "white", padding: 20 };

  console.log("tableRow");
  console.log(tableRow);

  return (
    <Modal
      visible={isModalOpen}
      onDismiss={hideModal}
      contentContainerStyle={containerStyle}
    >
      <Title>Edit Data</Title>
      {tableFields.map((tableField) => (
        <TextInput
          label={tableField}
          // @ts-ignore
          value={tableRow[tableField.toLowerCase()]}
          key={tableField}
        />
      ))}
    </Modal>
  );
};

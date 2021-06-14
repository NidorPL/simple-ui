var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Button, Modal, TextInput, Title } from "react-native-paper";
import React from "react";
import styled from "styled-components/native";
export const EditModal = ({ tableRow, tableFields, isModalOpen, setModalOpen, connection, api, refetch, }) => {
    const [elementToEdit, setElementToEdit] = React.useState(tableRow);
    const hideModal = () => setModalOpen(false);
    const containerStyle = { backgroundColor: "white", padding: 20 };
    const editData = () => __awaiter(void 0, void 0, void 0, function* () {
        yield api.editTableData({
            connection,
            newData: elementToEdit,
        });
        refetch();
        setModalOpen(false);
    });
    return (<Modal visible={isModalOpen} onDismiss={hideModal} contentContainerStyle={containerStyle}>
      <Title>Edit Data</Title>
      {tableFields.map((tableField) => (<TextInput key={tableField} label={tableField} 
    // @ts-ignore
    value={elementToEdit[tableField.toLowerCase()]} onChangeText={(text) => {
        setElementToEdit(Object.assign(Object.assign({}, elementToEdit), { [tableField.toLowerCase()]: text }));
        console.log(elementToEdit);
    }}/>))}
      <EditModalFooter>
        <Button onPress={() => editData()}>Edit</Button>
        <Button onPress={() => {
        setModalOpen(false);
    }}>
          Close
        </Button>
      </EditModalFooter>
    </Modal>);
};
const EditModalFooter = styled.View `
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 50px;
`;

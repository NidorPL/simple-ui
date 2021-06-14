var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { Fragment } from "react";
import { DataTable, Title, Portal } from "react-native-paper";
import styled from "styled-components/native";
import { useQuery } from "react-query";
import { defaultTableApi } from "./defaultTableApi";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EditModal } from "./components/EditModal";
export function DataTableMainScreen({ tableModuleConfig, customApi, }) {
    const { tableTitle, tableFields, connection, } = tableModuleConfig.moduleConfig;
    const [isModalOpen, setModalOpen] = React.useState(false);
    const [tableToEdit, setTableToEdit] = React.useState({});
    const [refechValue, setRefetch] = React.useState(0);
    let api = customApi || defaultTableApi;
    let { data: tableData, isLoading: isLoadingTable, error: errorLoadingTable, } = useQuery(String(refechValue), () => api.getTableData(connection));
    const showModal = (tableRow) => {
        setTableToEdit(tableRow);
        setModalOpen(true);
    };
    const deleteData = (tableRow) => __awaiter(this, void 0, void 0, function* () {
        const response = yield api.deleteTableData({
            connection,
            elementToDelete: tableRow,
        });
        tableData = response;
        setRefetch(refechValue + 1);
    });
    return (<Fragment>
      <HeaderWrapper>
        <Title>{tableTitle}</Title>
      </HeaderWrapper>
      <DataTable>
        <DataTable.Header>
          {tableFields.map((field) => {
        return (<DataTable.Title key={`table field ${field}`}>
                {field}
              </DataTable.Title>);
    })}
        </DataTable.Header>

        {errorLoadingTable && (<CenterWrapper>
            <Title>Network Error</Title>
          </CenterWrapper>)}

        {isLoadingTable && (<CenterWrapper>
            <Title>Loading data...</Title>
          </CenterWrapper>)}

        {!isLoadingTable &&
        !errorLoadingTable &&
        tableData.map((tableRow, index) => {
            return (<Fragment key={`${tableTitle} row ${index}`}>
                <DataTable.Row key={tableTitle + index}>
                  {tableFields.map((field) => {
                return (<DataTable.Cell key={`${tableTitle} cell ${field}`}>
                        {
                // @ts-ignore
                tableRow[field.toLowerCase()]}
                      </DataTable.Cell>);
            })}
                  <DataTable.Cell>
                    <MaterialCommunityIcons name={"pencil"} color={"black"} size={20} onPress={() => showModal(tableRow)}/>
                    <Icon name={"delete"} color={"black"} size={20} contentContainerStyle={{
                backgroundColor: "white",
                padding: 20,
            }} onPress={() => deleteData(tableRow)}/>
                  </DataTable.Cell>
                </DataTable.Row>

                {isModalOpen && (<Portal>
                    <EditModal tableRow={tableToEdit} tableFields={tableFields} isModalOpen={isModalOpen} setModalOpen={setModalOpen} connection={connection} api={api} refetch={() => setRefetch(refechValue + 1)}/>
                  </Portal>)}
              </Fragment>);
        })}
      </DataTable>
      <DataTable.Pagination page={1} numberOfPages={3} onPageChange={(page) => {
        console.log(page);
    }} label="1-2 of 6"/>
    </Fragment>);
}
const HeaderWrapper = styled.View `
  background-color: #ffffff;
  width: 100%;
  height: 80px;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const CenterWrapper = styled.View `
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Icon = styled(MaterialCommunityIcons) `
  margin-left: 20px;
`;

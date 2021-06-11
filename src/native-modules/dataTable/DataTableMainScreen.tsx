import React, { Fragment } from "react";
import { DataTable, Title, Portal } from "react-native-paper";
import styled from "styled-components/native";
import { useQuery } from "react-query";
import { defaultTableApi } from "./defaultTableApi";
import { Module, TableConfig } from "./data-table-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EditModal } from "./components/EditModal";
import { getAPI } from "../../register";

export function DataTableMainScreen({
  tableModuleConfig,
}: {
  tableModuleConfig: TableConfig;
}) {
  const {
    tableTitle,
    tableFields,
    connection,
  } = tableModuleConfig.moduleConfig;

  const [isModalOpen, setModalOpen] = React.useState(false);
  const [tableToEdit, setTableToEdit] = React.useState({});
  const [refechValue, setRefetch] = React.useState(0);

  let api = getAPI(tableModuleConfig.customApi, defaultTableApi);

  let {
    data: tableData,
    isLoading: isLoadingTable,
    error: errorLoadingTable,
  } = useQuery(String(refechValue), () => api.getTableData(connection));

  const showModal = (tableRow: object) => {
    setTableToEdit(tableRow);
    setModalOpen(true);
  };

  const deleteData = async (tableRow: object) => {
    const response = await api.deleteTableData({
      connection,
      elementToDelete: tableRow,
    });

    tableData = response;
    setRefetch(refechValue + 1)
  };

  return (
    <Fragment>
      <HeaderWrapper>
        <Title>{tableTitle}</Title>
      </HeaderWrapper>
      <DataTable>
        <DataTable.Header>
          {tableFields.map((field: string) => {
            return (
              <DataTable.Title key={`table field ${field}`}>
                {field}
              </DataTable.Title>
            );
          })}
        </DataTable.Header>

        {errorLoadingTable && (
          <CenterWrapper>
            <Title>Network Error</Title>
          </CenterWrapper>
        )}

        {isLoadingTable && (
          <CenterWrapper>
            <Title>Loading data...</Title>
          </CenterWrapper>
        )}

        {!isLoadingTable &&
          !errorLoadingTable &&
          tableData.map((tableRow: object, index: number) => {
            return (
              <Fragment key={`${tableTitle} row ${index}`}>
                <DataTable.Row key={tableTitle + index}>
                  {tableFields.map((field: string) => {
                    return (
                      <DataTable.Cell key={`${tableTitle} cell ${field}`}>
                        {
                          // @ts-ignore
                          tableRow[field.toLowerCase()]
                        }
                      </DataTable.Cell>
                    );
                  })}
                  <DataTable.Cell>
                    <MaterialCommunityIcons
                      name={"pencil"}
                      color={"black"}
                      size={20}
                      onPress={() => showModal(tableRow)}
                    />
                    <Icon
                      name={"delete"}
                      color={"black"}
                      size={20}
                      contentContainerStyle={{
                        backgroundColor: "white",
                        padding: 20,
                      }}
                      onPress={() => deleteData(tableRow)}
                    />
                  </DataTable.Cell>
                </DataTable.Row>

                {isModalOpen && (
                  <Portal>
                    <EditModal
                      tableRow={tableToEdit}
                      tableFields={tableFields}
                      isModalOpen={isModalOpen}
                      setModalOpen={setModalOpen}
                      connection={connection}
                      api={api}
                      refetch={() => setRefetch(refechValue + 1)}
                    />
                  </Portal>
                )}
              </Fragment>
            );
          })}
      </DataTable>
      <DataTable.Pagination
        page={1}
        numberOfPages={3}
        onPageChange={(page) => {
          console.log(page);
        }}
        label="1-2 of 6"
      />
    </Fragment>
  );
}

const HeaderWrapper = styled.View`
  background-color: #ffffff;
  width: 100%;
  height: 80px;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const CenterWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Icon = styled(MaterialCommunityIcons)`
  margin-left: 20px;
`;

import React, { Fragment } from "react";
import { DataTable, Title, Portal } from "react-native-paper";
import styled from "styled-components/native";
import { useQuery } from "react-query";
import { defaultTableApi } from "./defaultTableApi";
import { TableConfig } from "./table-types";
import { getAPI } from "../../registers/api-register";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EditModal } from "./components/EditModal";

export default function DataTableMainScreen({
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

  let api = getAPI(tableModuleConfig.customApi, defaultTableApi);

  const {
    data: tableData,
    isLoading: isLoadingTable,
    error: errorLoadingTable,
  } = useQuery(`table_${tableModuleConfig}`, () =>
    api.getTableData(connection)
  );

  const showModal = (tableRow: object) => {
    setTableToEdit(tableRow);
    setModalOpen(true);
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
          tableData.map(
            (
              tableRow: {
                name: string;
                quantity: number;
                unit: string;
                bbf: string;
              },
              index: number
            ) => {
              return (
                <Fragment key={`table_row_${tableRow.name}`}>
                  <DataTable.Row key={tableTitle + index}>
                    <DataTable.Cell>{tableRow.name}</DataTable.Cell>
                    <DataTable.Cell>{tableRow.quantity}</DataTable.Cell>
                    <DataTable.Cell>{tableRow.unit}</DataTable.Cell>
                    <DataTable.Cell>{tableRow.bbf}</DataTable.Cell>
                    <DataTable.Cell>
                      <MaterialCommunityIcons
                        name={"pencil"}
                        color={"black"}
                        size={20}
                        onPress={(data) => showModal(tableRow)}
                      />
                      <Icon
                        name={"delete"}
                        color={"black"}
                        size={20}
                        contentContainerStyle={{
                          backgroundColor: "white",
                          padding: 20,
                        }}
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
                      />
                    </Portal>
                  )}
                </Fragment>
              );
            }
          )}
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

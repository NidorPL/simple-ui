import React, { Fragment } from "react";
import { DataTable, Title } from "react-native-paper";
import styled from "styled-components/native";
import { useQuery } from "react-query";
import { defaultTableApi } from "./defaultTableApi";
import { TableConfig } from "./table-types";
import { getAPI } from "../../registers/api-register";

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

  let api = getAPI(tableModuleConfig.customApi, defaultTableApi);

  const {
    data: tableData,
    isLoading: isLoadingTable,
    error: errorLoadingTable,
  } = useQuery(`table_${tableModuleConfig}`, () =>
    api.getTableData(connection)
  );

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
                <DataTable.Row key={tableTitle + index}>
                  <DataTable.Cell>{tableRow.name}</DataTable.Cell>
                  <DataTable.Cell>{tableRow.quantity}</DataTable.Cell>
                  <DataTable.Cell>{tableRow.unit}</DataTable.Cell>
                  <DataTable.Cell>{tableRow.bbf}</DataTable.Cell>
                </DataTable.Row>
              );
            }
          )}
      </DataTable>
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

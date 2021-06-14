import { Dispatch, SetStateAction } from "react";
export declare const EditModal: ({ tableRow, tableFields, isModalOpen, setModalOpen, connection, api, refetch, }: {
    tableRow: object;
    tableFields: string[];
    isModalOpen: boolean;
    setModalOpen: Dispatch<SetStateAction<boolean>>;
    connection: object;
    api: any;
    refetch: () => void;
}) => JSX.Element;

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
export const defaultTableApi = {
    getTableData: (connection) => __awaiter(void 0, void 0, void 0, function* () {
        const { data } = yield axios.get(connection.get, {
            baseURL: connection.baseUrl,
            timeout: 5000,
        });
        return data;
    }),
    editTableData: ({ connection, newData, }) => __awaiter(void 0, void 0, void 0, function* () {
        const { data } = yield axios.post(connection.edit, newData, {
            baseURL: connection.baseUrl,
            timeout: 5000,
        });
        return data;
    }),
    deleteTableData: ({ connection, elementToDelete, }) => __awaiter(void 0, void 0, void 0, function* () {
        const { data } = yield axios.post(connection.delete, elementToDelete, {
            baseURL: connection.baseUrl,
            timeout: 5000,
        });
        return data;
    }),
};

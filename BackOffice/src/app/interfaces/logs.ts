// To parse this data:
//
//   import { Convert } from "./file";
//
//   const producto = Convert.toProducto(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Logs {
    _id?:         ID;
    user:        ID[];
    fechaLog:     string;
    tipoLog:       string;

    createdAt?:   AtedAt;
    updatedAt?:   AtedAt;
}

export interface ID {
    $oid: string;
}

export interface AtedAt {
    $date: DateClass;
}

export interface DateClass {
    $numberLong: string;
}


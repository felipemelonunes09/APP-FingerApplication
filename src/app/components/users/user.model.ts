import { JsonpClientBackend } from "@angular/common/http";

export interface User {
    id: number, 
    name: string, 
    email: string, 
    address: any, 
    company: any,
}
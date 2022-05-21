import { rejects } from "assert"
import axios, { AxiosResponse } from "axios"
import { HOST } from "../../../config"
import { User } from "../types/types"
import { getSession } from "../utils/authKeyStorageService"

export const getAccount = (): Promise<AxiosResponse<User>> => {
    const session = getSession()
    console.log(`Token = ${session?.token}`);
    return axios.get(`${HOST}/api/account/`, {
        headers: {
            "x-access-token": session?.token || ""
        }
    })
}

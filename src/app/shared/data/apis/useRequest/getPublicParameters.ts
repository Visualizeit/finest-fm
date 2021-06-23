import { createRandom } from '@app/shared/helper'
import { appKey } from '@app/shared/plugin/xmly/token'

export const getPublicParameters = () => {
    const randomString = createRandom()

    const parameters: Parameter = {
        app_key: appKey,
        client_os_type: 4,
        nonce: randomString,
        timestamp: Date.now(),
        server_api_version: '1.0.0',
    }

    return {
        ...parameters,
    }
}

export interface Parameter {
    app_key: string
    client_os_type: number
    nonce: string
    timestamp: number
    server_api_version: string
}

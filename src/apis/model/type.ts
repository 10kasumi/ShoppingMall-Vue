export interface Result {
    code: string,
    message: string,
    result: []
}
export interface ResultObject {
    code: string,
    message: string,
    result: {
        mainPicures?: string[]
    }
}
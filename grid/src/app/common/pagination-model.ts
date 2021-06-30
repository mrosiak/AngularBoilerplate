export interface Pagination<T> extends Support{
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: Array<T>
}
export interface SinglePage<T> extends Support{
    data: T
}
export interface Support{
    support: {
        url: string,
        text: string
    }
}
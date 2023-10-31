

export const activateItemByKey = (array: any, key:string) => {
    return array.map((item: any) => ({
        ...item,
        active: item.key === key
    }))
}
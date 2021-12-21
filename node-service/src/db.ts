export const getAllAvailableItems = () => {
    return ['item1', 'item2', 'item3', 'item4']
}

export const updateInventory = (item: string): void => {
    console.log(`Updating inventory for ${item}`);
}
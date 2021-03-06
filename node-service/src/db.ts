import * as mysql from 'mysql2/promise';

const connectionData = {
    host: process.env.DB_HOST !== undefined ? process.env.DB_HOST : '127.0.0.1',
    port: 3307,
    user: 'root',
    password: 'toor',
    database: 'item'
};
interface Item {
    id: number,
    item_name: string,
    qty: number
};

export const getAllAvailableItems = async (): Promise<string[]> => {
    const conn = await mysql.createConnection(connectionData);
    const [items, fields] = await conn.execute('SELECT * FROM `items` WHERE `qty` > 0');
    return (items as Item[]).map(item => item.item_name);
}

export const updateInventory = async (item: string): Promise<void> => {
    const conn = await mysql.createConnection(connectionData);
    await conn.execute(`UPDATE items SET qty = qty - 1 WHERE item_name = '${item}'`);
}
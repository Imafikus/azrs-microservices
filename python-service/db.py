
from typing import Optional
import os 
import mysql.connector
import requests

def get_connection():
    cn = mysql.connector.connect(
        host=os.getenv("DB_HOST", "localhost"),
        port=3306,
        user="root",
        password="toor",
        database='user'
    )
    return cn

def get_user_by_email(email: str) -> Optional[str]:
    cn = get_connection()
    cursor = cn.cursor()
    cursor.execute(f'''
        SELECT * 
        FROM users 
        WHERE email='{email}' 
    ''')
    res = cursor.fetchone()
    
    if res is None:
        return None
    
    return res[0]
    
def save_order(email: str, item: str):
    try:
        exact_timestamp = requests.get('http://worldtimeapi.org/api/timezone/Europe/Belgrade')
        created_at = exact_timestamp.json()['utc_datetime']
    except:
        created_at = ''
    
    cn = get_connection()
    cursor = cn.cursor()
    cursor.execute(f'''
        INSERT INTO all_orders (email, item, created_at)
        VALUES ('{email}', '{item}', '{created_at}');
    ''')
    cn.commit()    
    print(f'save order for email {email}, item {item}')
    
if __name__ == "__main__":
    print(get_user_by_email('test@example.com'))
    save_order('test@example.com', 'stagod')
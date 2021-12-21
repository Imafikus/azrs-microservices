from typing import Optional
import mysql.connector

def get_connection():
    cn = mysql.connector.connect(
    host="localhost",
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
    print(f'save order for email {email}, item {item}')
    
if __name__ == "__main__":
    print(get_user_by_email('test@example.com'))
    print(get_user_by_email('kurcinela'))
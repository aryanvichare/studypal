import time
import random
import logging
from argparse import ArgumentParser, RawTextHelpFormatter

import psycopg2
from psycopg2.errors import SerializationFailure

def create_users(conn):
    with conn.cursor() as cur:
        cur.execute(
            "CREATE TABLE IF NOT EXISTS users (id INT PRIMARY KEY, email VARCHAR(200), userpassword VARCHAR(30), usertype VARCHAR(20), name VARCHAR(30))"
        )
        cur.execute("UPSERT INTO users (id, email, userpassword, usertype, name) VALUES (1, 'jon@fisherman.com', 'password1', 'fisherman', 'jon stewart'), (2, 'joe@gmail.com', 'password1', 'customer', 'joe someone')")
        logging.debug("create_accounts(): status message: %s", cur.statusmessage)
    conn.commit()
    print ("users table created")


def add_users(conn, uname, pw, utype, uemail):
    with conn.cursor() as cur:
        cur.execute("SELECT id FROM users")
        # logging.debug("print_balances(): status message: %s", cur.statusmessage)
        rows = cur.fetchall()
        conn.commit()
        # print(f"Balances at {time.asctime()}:")
        i = 1
        for row in rows:
            i = i + 1
        i = str(i)
        
        cur.execute("UPSERT INTO users (id, email, userpassword, usertype, name) VALUES (" + i +", '" + uemail + "', '" + pw + "', '" + utype +"', '" + uname +"')")
        logging.debug("create_accounts(): status message: %s", cur.statusmessage)
    conn.commit()
    print ("user added")


def login(conn, uemail, pw):
    with conn.cursor() as cur:
        cur.execute("SELECT id, email, userpassword, usertype, name FROM users")
        # logging.debug("print_balances(): status message: %s", cur.statusmessage)
        rows = cur.fetchall()
        conn.commit()
        # print(f"Balances at {time.asctime()}:")
        for row in rows:
            print(row)
            print (type(row))
            if row[1] == uemail and row[2] == pw:
                print ("found")
                return True, row[3], row[4]
        return False, 'none', 'none'

def delete_users(conn):
    with conn.cursor() as cur:
        cur.execute("DELETE FROM defaultdb.users")
        logging.debug("delete_accounts(): status message: %s", cur.statusmessage)
    conn.commit()
    with conn.cursor() as cur:
        cur.execute("DROP TABLE users")
        logging.debug("delete_accounts(): status message: %s", cur.statusmessage)
    conn.commit()

    print ("users table deleted")


def connector():
    conn=psycopg2.connect("dbname='nifty-puma-91.defaultdb' user='muntaser' password='rootpassword' host='free-tier.gcp-us-central1.cockroachlabs.cloud' port='26257'")
    return conn


def initialize(conn):
    with conn.cursor() as cur:
        cur.execute(
            "CREATE TABLE IF NOT EXISTS questions (id INT PRIMARY KEY, question VARCHAR(800), answer VARCHAR(1200))"
        )
        # cur.execute("UPSERT INTO users (id, email, userpassword, usertype, name) VALUES (1, 'jon@fisherman.com', 'password1', 'fisherman', 'jon stewart'), (2, 'joe@gmail.com', 'password1', 'customer', 'joe someone')")
        # logging.debug("create_accounts(): status message: %s", cur.statusmessage)
    conn.commit()
    print ("quiz table created")    


def addq(question, answer, conn):
    with conn.cursor() as cur:
        cur.execute("SELECT id FROM questions")
        # logging.debug("print_balances(): status message: %s", cur.statusmessage)
        rows = cur.fetchall()
        conn.commit()
        # print(f"Balances at {time.asctime()}:")
        i = 1
        for row in rows:
            i = i + 1
        i = str(i)
        
        cur.execute("UPSERT INTO questions (id, question, answer) VALUES (" + i +", '" + question + "', '" + answer + "')")
        # logging.debug("create_accounts(): status message: %s", cur.statusmessage)
    conn.commit()
    print ("question added")    


def getallquestions(conn):
    with conn.cursor() as cur:
        cur.execute("SELECT id, question, answer FROM questions")
        # logging.debug("print_balances(): status message: %s", cur.statusmessage)
        rows = cur.fetchall()
        conn.commit()
        # print(f"Balances at {time.asctime()}:")
        results = []
        for row in rows:
            q = {}
            print(row)
            # print (type(row))
            q['id'] = str(row[0])
            q['question'] = str(row[1])
            q['question'] = str(row[2])

            results.append(q)

        return results    


def purgedb(conn):
    with conn.cursor() as cur:
        cur.execute("DELETE FROM defaultdb.questions")
        logging.debug("delete_accounts(): status message: %s", cur.statusmessage)
    conn.commit()
    with conn.cursor() as cur:
        cur.execute("DROP TABLE questions")
        logging.debug("delete_accounts(): status message: %s", cur.statusmessage)
    conn.commit()

    print ("questions table deleted")



# conn = connector()
# initialize(conn)
# addq("test question" , "test answer", conn)
# r = getallquestions(conn)

# print (r)

# purgedb(conn)


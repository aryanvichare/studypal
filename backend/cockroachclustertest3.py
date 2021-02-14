#!/usr/bin/env python3
"""
Test psycopg with CockroachDB.
"""

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


def print_names(conn):
    with conn.cursor() as cur:
        cur.execute("SELECT id, name FROM users")
        logging.debug("print_balances(): status message: %s", cur.statusmessage)
        rows = cur.fetchall()
        conn.commit()
        print(f"Balances at {time.asctime()}:")
        for row in rows:
            print(row)

def print_names_and_passwords(conn):
    with conn.cursor() as cur:
        cur.execute("SELECT id, email, userpassword FROM users")
        logging.debug("print_balances(): status message: %s", cur.statusmessage)
        rows = cur.fetchall()
        conn.commit()
        print(f"Balances at {time.asctime()}:")
        for row in rows:
            print(row)

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


# def transfer_funds(conn, frm, to, amount):
#     with conn.cursor() as cur:

#         # Check the current balance.
#         cur.execute("SELECT balance FROM accounts WHERE id = %s", (frm,))
#         from_balance = cur.fetchone()[0]
#         if from_balance < amount:
#             raise RuntimeError(
#                 f"Insufficient funds in {frm}: have {from_balance}, need {amount}"
#             )

#         # Perform the transfer.
#         cur.execute(
#             "UPDATE accounts SET balance = balance - %s WHERE id = %s", (amount, frm)
#         )
#         cur.execute(
#             "UPDATE accounts SET balance = balance + %s WHERE id = %s", (amount, to)
#         )

#     conn.commit()
#     logging.debug("transfer_funds(): status message: %s", cur.statusmessage)


def run_transaction(conn, op, max_retries=3):
    """
    Execute the operation *op(conn)* retrying serialization failure.

    If the database returns an error asking to retry the transaction, retry it
    *max_retries* times before giving up (and propagate it).
    """
    # leaving this block the transaction will commit or rollback
    # (if leaving with an exception)
    with conn:
        for retry in range(1, max_retries + 1):
            try:
                op(conn)

                # If we reach this point, we were able to commit, so we break
                # from the retry loop.
                return

            except SerializationFailure as e:
                # This is a retry error, so we roll back the current
                # transaction and sleep for a bit before retrying. The
                # sleep time increases for each failed transaction.
                logging.debug("got error: %s", e)
                conn.rollback()
                logging.debug("EXECUTE SERIALIZATION_FAILURE BRANCH")
                sleep_ms = (2 ** retry) * 0.1 * (random.random() + 0.5)
                logging.debug("Sleeping %s seconds", sleep_ms)
                time.sleep(sleep_ms)

            except psycopg2.Error as e:
                logging.debug("got error: %s", e)
                logging.debug("EXECUTE NON-SERIALIZATION_FAILURE BRANCH")
                raise e

        raise ValueError(f"Transaction did not succeed after {max_retries} retries")


def test_retry_loop(conn):
    """
    Cause a seralization error in the connection.

    This function can be used to test retry logic.
    """
    with conn.cursor() as cur:
        # The first statement in a transaction can be retried transparently on
        # the server, so we need to add a dummy statement so that our
        # force_retry() statement isn't the first one.
        cur.execute("SELECT now()")
        cur.execute("SELECT crdb_internal.force_retry('1s'::INTERVAL)")
    logging.debug("test_retry_loop(): status message: %s", cur.statusmessage)


def main():
    # opt = parse_cmdline()
    # logging.basicConfig(level=logging.DEBUG if opt.verbose else logging.INFO)
    logging.basicConfig(level=logging.DEBUG)

    # conn = psycopg2.connect(opt.dsn)
    # conn = psycopg2.connect("postgres://muntaser:rootpassword@free-tier.gcp-us-central1.cockroachlabs.cloud:26257/defaultdb?sslmode=require&options=--cluster=nifty-puma-91")
    conn=psycopg2.connect("dbname='nifty-puma-91.defaultdb' user='muntaser' password='rootpassword' host='free-tier.gcp-us-central1.cockroachlabs.cloud' port='26257'")
##    delete_users(conn)
    create_users(conn)
    print_names(conn)
##    add_users(conn, 'cartman', 'password1', 'customer', 'cartman@southpark.com')

    

    amount = 100
    fromId = 1
    toId = 2

    # try:
    #     run_transaction(conn, lambda conn: transfer_funds(conn, fromId, toId, amount))

    #     # The function below is used to test the transaction retry logic.  It
    #     # can be deleted from production code.
    #     # run_transaction(conn, test_retry_loop)
    # except ValueError as ve:
    #     # Below, we print the error and continue on so this example is easy to
    #     # run (and run, and run...).  In real code you should handle this error
    #     # and any others thrown by the database interaction.
    #     logging.debug("run_transaction(conn, op) failed: %s", ve)
    #     pass

    print_names_and_passwords(conn)

    status, usertype, name = login(conn, 'cartman@southpark.com', 'password1')

    print (status)
    print (name)
    print (usertype)

    delete_users(conn)

    # Close communication with the database.
    conn.close()


def parse_cmdline():
    parser = ArgumentParser(description=__doc__,
                            formatter_class=RawTextHelpFormatter)
    parser.add_argument(
        "dsn",
        help="database connection string\n\n"
             "For cockroach demo, use postgresql://<username>:<password>@<hostname>:<port>/bank?sslmode=require,\n"
             "with the username and password created in the demo cluster, and the hostname and port listed in the\n"
             "(sql/tcp) connection parameters of the demo cluster welcome message."
    )

    parser.add_argument("-v", "--verbose",
                        action="store_true", help="print debug info")

    opt = parser.parse_args()
    return opt


if __name__ == "__main__":
    main()

## postgres://rootuser:rootpassword@weary-ox-66d.gcp-us-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=require
## postgres://muntaser@free-tier.gcp-us-central1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&sslrootcert=<your_certs_directory>/cc-ca.crt&options=--cluster=nifty-puma-91
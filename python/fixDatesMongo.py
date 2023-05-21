#!/bin/python
################################################################################
## imports
################################################################################
import argparse
import datetime
import numpy as np
import os
import pandas as pd
import pprint
import pymongo
import time
import timeit
################################################################################
## PEP 20:
## There are a lot of ugly programs... they are difficult to maintain and 
## embarrasing to review. The print(this.__spec__) shows the Python PEP creed.
## Stick to it, and you will find your code enjoyable to create, read, and
## maintain.
################################################################################
#import this
################################################################################
## arguments
################################################################################
__author__='John M Harper'
__copyright__='Copyright (C) 2023 John M Harper'
__license__='Public Domain'
__program_name__='fixDatesMongo.py'
__version__='0.1.0'
################################################################################
parser = argparse.ArgumentParser()
parser.add_argument (
    '-v',
    '--verbose',
    action='store_true',
    default=False
)
parser.add_argument (
    '-p',
    '--password',
    action='store',
    help='Enter the password for your MongoDB connection',
    default='wilmaPebbles'
)

parser.add_argument (
    '-d',
    '--database_name',
    action='store',
    help='Enter the database you wish to use in your MongoDB connection',
    default='sample_training'
)

parser.add_argument (
    '-c',
    '--connect_string',
    action='store',
    help='Enter the connection string supplied by MongoDB',
    default='mongodb+srv://fred:{password}@myfirstmongodb.3kkiykj.mongodb.net/{db_name}'
)

args = parser.parse_args()
################################################################################
## connect
################################################################################
def get_connection(_CONNECT_STRING):
    ## connect to myFirstMongoDB
    try:
        connection = pymongo.MongoClient(_CONNECT_STRING)
        db = connection.test

        if args.verbose:
            print('Connected to myFirstMongoDB. . .')
    except Exception as e:
        print(e)
    return connection
################################################################################
## main
################################################################################
def main():
    _PASSWORD=args.password
    _DB_NAME=args.database_name
    _CONNECT_STRING=args.connect_string
    _CONNECT_STRING=_CONNECT_STRING.replace('{password}', _PASSWORD)
    _CONNECT_STRING=_CONNECT_STRING.replace('{db_name}', _DB_NAME)

    client=get_connection(_CONNECT_STRING)
    available_databases=client.list_database_names()

    db = client.sample_training
    collection = db.inspections
    single_row = collection.find_one()

    ## collapsing two steps into one
    ## before: create the pymongo cursor with find() --> populate data frame
    ## dfFred=list(cursor).
    dfAllInspections = pd.DataFrame(collection.find())
    dfCount = dfAllInspections.axes[0]
    dfTotalRecords = dfCount.stop
    dfAllInspections['date'] = pd.to_datetime(dfAllInspections['date']).dt.normalize
    diAllInspections = dfAllInspections.to_dict("records")

    print(dfAllInspections['date'].head())


    




    print(updateResults)

    if args.verbose:
        print('You succesffully turned on the verbose option.')
        print('################################################################################')
        print(_CONNECT_STRING)
        print('--------------------------------------------------------------------------------')
        print(client)
        print('--------------------------------------------------------------------------------')
        print('available databases:')
        print('--------------------------------------------------------------------------------')
        print(available_databases)
        print('--------------------------------------------------------------------------------')
        pprint.pprint(single_row)
        print('--------------------------------------------------------------------------------')
        print('What is the type of dfAllInspections and how many records does dfInspections contain?')
        print('--------------------------------------------------------------------------------')
        print(type(dfCount))
        print(dfCount)
        print(f'The collection dfAllInspections has a record count of: {dfTotalRecords}.')
        print('--------------------------------------------------------------------------------')
        print('what are the top 5 records -- not sorted?')
        print('what are the keys in the inspection collection?')
        print('--------------------------------------------------------------------------------')
        print(dfAllInspections.head())
        print(dfAllInspections.keys())
        print('********************************************************************************')
        print(f'{__copyright__} {__author__} {__license__} {__program_name__} {__version__}' )
        print('################################################################################')

if __name__=="__main__":
    main()

## /opt/homebrew/bin/python3 /Users/harperjm/git-repos/wdd230-10/scripts/fixDatesMongo.py
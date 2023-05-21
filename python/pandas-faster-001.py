import pandas as pd
import numpy as np

size = 10,000 
df = pd.DataFrame()
df [ 'age'           ] = np.random.randint ( 0, 100, size )
df [ 'time_in_bed'   ] = np.random.randint ( 0, 9, size )
df [ 'pct_sleeping'  ] = np.rand (size)
df [ 'favorite_food' ] = np.random.choice ( ['Pizza', 'Taco', 'Ice Cream'], size )
df [ 'hate_food'     ] = np.random.choice ( ['Broccoli', 'Candy Corn', 'Eggs'], size )

print ( df.head() )
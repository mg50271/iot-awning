import requests
from bs4 import BeautifulSoup

def scrape_data(url):
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'html.parser')
        table = soup.find('table')
        if table:
            data = []
            rows = table.find_all('tr')
            # Extract column names
            header_row = rows[0]
            header_cols = header_row.find_all('th')
            column_names = [col.text.strip() for col in header_cols]
            data.append(column_names)
            # Extract data rows
            for row in rows[1:]:
                cols = row.find_all('td')
                cols = [col.text.strip() for col in cols]
                data.append(cols)
            return data
        else:
            print("Table not found on the page.")
    else:
        print("Failed to fetch data. Status code:", response.status_code)
    return None

def scrape_all_data():
    base_url = "https://meteo.hr/podaci.php?section=podaci_vrijeme&param=hrvatska1_n&sat="
    all_data = []
    for hour in range(25):
        url = f"{base_url}{hour:02d}"
        data_hour = scrape_data(url)
        if data_hour:
            all_data.append(data_hour)
    return all_data

if __name__ == "__main__":
    all_data = scrape_all_data()
    for hour_data in all_data:
        for row in hour_data:
            print("\t".join(row))
        print("-" * 50)
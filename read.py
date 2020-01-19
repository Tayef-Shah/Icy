import string

def checkCom(inputString):
    remove = string.punctuation + string.whitespace
    input = inputString.translate(None, remove)

    return input == "Pork" or input == "Chicken" or input == "Beef"

f = open("data.text","r")

commodity = ""
brand = ""
year = ""
practice = ""
country = ""
unit = ""
gwp = 0

while True:

    input = f.readline()
    if input == "" :
        break

    if checkCom(input) :
        commodity = input
        brand = f.readline()
    else :
        brand = input

    year = f.readline()
    practice = f.readline()
    country = f.readline()
    unit = f.readline()
    gwp = float(f.readline())

    print(brand + year + practice + country + unit + str(gwp) + '\n')

f.close()

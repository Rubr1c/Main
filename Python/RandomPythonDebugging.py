def roman_to_integer(roman):
  # Write your function code here
  out = 0
  romanDict = {"M" : 1000, "D" : 500, "C" : 100, "L" : 50, "X" : 10, "V" : 5, "I" : 1}
  for keys in romanDict.keys():
    for i in roman[::-1]:
        if keys == i:
            if len(roman) > 1:
                if i > roman[roman.index(i) - 1]:
                    out += romanDict[keys]
                else:
                    out -= romanDict[keys]
            else:
                    out += romanDict[keys]
  return out  


print(roman_to_integer("XXXII"))
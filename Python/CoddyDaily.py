#Feb 24 2024

def is_symmetric(n):
    string_num = str(n)
    return string_num == string_num[::-1]

#Feb 25 2024

def recycling_robot(trash, categories):
    for i in categories:
        if i.lower() == trash.lower():
            return i
    return "Not recyclable"
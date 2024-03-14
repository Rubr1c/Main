
#Feb 14 2024

import re

def calculate(expression):
    # Split the expression into numbers and operators
    numbers = list(map(int, re.findall(r'\d+', expression)))
    operators = re.findall(r'[+-]', expression)

    # Initialize the result with the first number
    result = numbers[0]

    # Iterate over the rest of the expression
    for i in range(len(operators)):
        # Get the current operator and number
        operator = operators[i]
        number = numbers[i + 1]

        # Perform the operation
        if operator == '+':
            result += number
        elif operator == '-':
            result -= number

    return result


#Feb 15 2024

# class ShootingStar:
#     self.totalStars = 0
#     self.date = date
#     self.location = location
#     def record_observation(__init__, date, location):
#         self.date = date
#         self.location = location
#         self.totalStars += 1
#     def display_observation(__init__):
#         print(f"Shooting Star #{self.totalStars}\n")
#         print(f"Date and Time: {self.date}\n")
#         print(f"Location: {self.location}\n")
#     def display_total_count(__init__):
#         print(f"Total Shooting Stars Observed: {self.totalStars}")

#Feb 16 2024

def count_set_bits(num):
    count = 0
    
    # Iterate through each bit of the binary representation of the number
    while num > 0:
        # Check if the least significant bit (rightmost bit) is set (equals 1)
        # If it is, increment the counter
        count += num & 1
        
        # Right shift the number by 1 bit to move to the next bit
        num >>= 1
    
    # Return the total count of set bits
    return count


#Feb 17 2024

def emissions_evaluation(year):
    if year <= 1990:
        return "Dire"
    elif year <= 2000:
        return "Bad"
    elif year <= 2010:
        return "Moderate"
    else:
        return "Good"


#Feb 18 2024

def calc_thickness(n):
    x = 0.0005
    if n == 0:
        return x
    else:
        for i in range(n):
            x *= 2
    return x


#Feb 19 2024

def check_certification_eligibility(certifications, requirements):
    count = 0

    for i in certifications:
        if i in requirements:
            count += 1
    
    if count == len(requirements):
        return True
    else:
        return False
    

#Feb 20 2024

def are_anagrams(str1, str2):
    str1 = str1.lower().replace(" ", "")
    str2 = str2.lower().replace(" ", "")
    
    return sorted(str1) == sorted(str2)


#Feb 21 2024

def longest_increasing_subsequence(lst):
    if not lst:
        return 0

    dp = [1] * len(lst)

    for i in range (1 , len(lst)):
        for j in range(0 , i):
            if lst[i] > lst[j] and dp[i]< dp[j] + 1 :
                dp[i] = dp[j]+1

    return max(dp)


#Feb 22 2024

def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i-1
        while j >=0 and key < arr[j] :
                arr[j+1] = arr[j]
                j -= 1
        arr[j+1] = key
    return arr


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

#Feb 26 2024

def estimate_house_price(attributes):
    cost = 100000
    for keys in attributes:
        if keys == "bedrooms":
            cost += 5000 * attributes[keys]
        elif keys == "bathrooms":
            cost += 3000 * attributes[keys]
        elif keys == "square_feet":
            cost += 50 * attributes[keys]
        elif keys == "garage":
            if (attributes[keys]):
                cost += 10000
        elif keys == "neighborhood":
            if (attributes[keys] == "Suburban"):
                cost += 20000
            elif (attributes[keys] == "Urban"):
                cost += 15000
            elif (attributes[keys] == "Rural"):
                cost += 10000
    return cost

#Mar 14th 2024

def generate_playlist(genres, available_songs, max_duration):
    # Write code here
    playlist = []
    duration = 0
    for i in available_songs:
        for j in genres:
            if i["genre"] == j and i["duration"] + duration <= max_duration:
                playlist.append(i["title"])
                duration += i["duration"]
    return playlist



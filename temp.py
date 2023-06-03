# Input = "a3b1c5"
# Ouput = "aaab1ccccc"

# Input = [12, 35, 9, 56, 24]
# Output : [24, 35, 9, 56, 12]

input = input("enter string")
output = ""

for i in input:
    if i.isalpha():
        inputString = i
    else:
        output += int(i)*inputString

print(output)
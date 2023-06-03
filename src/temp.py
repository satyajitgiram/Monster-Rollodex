# input = input("enter the string in the format ")
# output = ''
# for char in input:
#     if char.isalpha():
#         inputstring = char
#     else:
#         num = int(char) 
#         output += num * inputstring
# print(output)

Input = [12, 35, 9, 56, 24]
# Output : [24, 35, 9, 56, 12]
Input[0], Input[-1] = Input[-1], Input[0]
print(Input)


def print_formats(n):
    for i in range(1, n+1):
        decimal = i
        octal = oct(i)
        hexadecimal = hex(i).upper()
        binary = bin(i)
        print(f"{decimal}\t {octal}\t {hexadecimal}\t {binary}")


n = int(input())
print_formats(n)
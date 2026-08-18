MOD = 10003

def solve(A):
    if A <= 0:
        return 0
    if A == 1:
        return 1
    if A == 2:
        return 2
    party = [0] * (A + 1)
    party[1] = 1
    party[2] = 2
    for i in range(3, A + 1):
        party[i] = (party[i - 1] + (party[i - 2] * (i - 1)) % MOD) % MOD
    return party[A]


if __name__ == "__main__":
    import sys

    data = sys.stdin.read().strip().split()
    if not data:
        print(0)
    else:
        A = int(data[0])
        print(solve(A))

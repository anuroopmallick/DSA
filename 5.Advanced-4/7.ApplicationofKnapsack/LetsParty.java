import java.util.Scanner;

public class LetsParty {
    static final int MOD = 10003;

    public static int solve(int A) {
        if (A <= 0) return 0;
        if (A == 1) return 1;
        if (A == 2) return 2;
        int[] party = new int[A + 1];
        party[1] = 1;
        party[2] = 2;
        for (int i = 3; i <= A; i++) {
            party[i] = (party[i - 1] + (int) (((long) party[i - 2] * (i - 1)) % MOD)) % MOD;
        }
        return party[A];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int A = sc.nextInt();
        System.out.println(solve(A));
    }
}

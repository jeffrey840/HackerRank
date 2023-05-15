package JAVAQUESTIONS;

import java.math.BigInteger;
import java.util.Scanner;

public class vavaBigint {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        BigInteger a = scan.nextBigInteger(); // Read the 1st #
        BigInteger b = scan.nextBigInteger(); // Read the 2nd #
        scan.close(); // close Scanner object

        System.out.println(a.add(b) + "\n" + a.multiply(b));
    }
}



package JAVAQUESTIONS;

import java.util.Scanner;

public class stringTokens {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String s = scan.nextLine().trim();
        scan.close();
        if (s.length() == 0) {
            System.out.println(0);
            return;
        }
        String[] tokens = s.split("[^A-Za-z]+");
        System.out.println(tokens.length);
        for (String token : tokens) {
            System.out.println(token);
        }
    }



}

package JAVAQUESTIONS;

import java.util.Scanner;

public class stringTokens {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String s = scan.nextLine();
        // Split the input string into tokens
        String[] tokens = s.split("[ !,?._'@]+");

        // Print the number of tokens
        System.out.println(tokens.length);

        // Print each token on a new line
        for (String token : tokens) {
            System.out.println(token);
        }
        scan.close();
    }



}

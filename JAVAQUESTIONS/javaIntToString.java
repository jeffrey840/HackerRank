package JAVAQUESTIONS;
import java.io.*;
import java.util.*;


public class javaIntToString {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */

        Scanner scan = new Scanner(System.in);

        int i = scan.nextInt();

        if( (i <= 100) && (i >= -100)) {
            System.out.println("Good job");
        } else {
            System.out.println("Wrong answer");
        }
    }
}

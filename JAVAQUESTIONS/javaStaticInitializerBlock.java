package JAVAQUESTIONS;

import java.io.*;
import java.util.*;


public class javaStaticInitializerBlock {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */

        Scanner scan = new Scanner(System.in);
        // initializing i
        int i = scan.nextInt();
        int a = scan.nextInt();

        if(( i <= 0) || ( a <= 0)){

            System.out.println("java.lang.Exception: Breadth and height must be positive");
        } else {
            System.out.println(i*a);
        }

    }
}

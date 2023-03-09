package JAVAQUESTIONS;

import java.util.Scanner;
import java.io.*;
import java.util.*;

public class javaStringsIntroduction {

    public static void main(String[] args) {

        Scanner sc=new Scanner(System.in);
        String A=sc.next();
        String B=sc.next();
        /*
first output will have the length of a nd b
second will compare if the two strings
third will print it out with a space


         * */

        /* Enter your code here. Print output to STDOUT. */
        System.out.println((B + A).length());
        System.out.println(A.compareTo(B)> 0 ? "Yes" : "No");
        System.out.println(
            A.substring(0,1).toUpperCase() + A.substring(1).toLowerCase()
                +" "+
            B.substring(0,1).toUpperCase() + B.substring(1).toLowerCase()
        );
    }
}

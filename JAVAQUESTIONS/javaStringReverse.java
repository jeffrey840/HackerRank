package JAVAQUESTIONS;

import java.io.*;
import java.util.*;



public class javaStringReverse {

    public static void main(String[] args) {

        Scanner sc=new Scanner(System.in);
        String A=sc.next();

        System.out.println( A.equals( new StringBuilder(A).reverse().toString()) ? "Yes" : "No" );

        /* Enter your code here. Print output to STDOUT. */

    }
}

//returns yes if panagram no if false
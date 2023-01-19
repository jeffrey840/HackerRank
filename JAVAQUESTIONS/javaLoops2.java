package JAVAQUESTIONS;

import java.io.*;
import java.util.*;
/*
public class javaLoops2 {

    public static void main(String[] args) {

        Scanner in = new Scanner(System.in);
        int t=in.nextInt();
        for(int i=0;i<t;i++){
            int a = in.nextInt();
            int b = in.nextInt();
            int n = in.nextInt();
            int sum = a;
            for (int j = 0; j<n; j++) {
                int nextEle = (int)Math.pow(2, j)*b;
                sum = sum + nextEle;
                System.out.printf("%s ",sum);
            }
            if (i < t-1) {
                System.out.print("\n");
            }
        }
        in.close();
    }


}
*/

public class javaLoops2 {

    public static void main(String[] args) {

        Scanner in = new Scanner(System.in);
        int t=in.nextInt();
        for(int i=0;i<t;i++){
            int a = in.nextInt();
            int b = in.nextInt();
            int n = in.nextInt();

            for (int j = 0;j<n;j++){
                a+=b;
                if(j>0) {
                    System.out.print(" ");
                }
                System.out.print(a);
                b = b * 2;
            }
            System.out.print("\n");
        }
    }

}

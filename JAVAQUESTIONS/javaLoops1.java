package JAVAQUESTIONS;

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

public class javaLoops1 {

    private static final Scanner scanner = new Scanner(System.in);
    public static void main(String[] args) throws IOException {

        Scanner in = new Scanner(System.in);
        int N = in.nextInt();
        for (int i = 1; i <= 10; i++)
            System.out.print(N + " x " + i + " = " + N * i + "\n");

    }

}

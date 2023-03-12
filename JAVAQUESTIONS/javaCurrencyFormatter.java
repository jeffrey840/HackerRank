package JAVAQUESTIONS;

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class javaCurrencyFormatter {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double payment = scanner.nextDouble();
        scanner.close();
        NumberFormat usNumbers = NumberFormat.getCurrencyInstance(Locale.US);
        NumberFormat frNumbers = NumberFormat.getCurrencyInstance(Locale.FRANCE);
        NumberFormat chNumbers = NumberFormat.getCurrencyInstance(Locale.CHINA);
        NumberFormat indiaNumbers = NumberFormat.getCurrencyInstance(new Locale("en", "IN"));
        System.out.printf("US: %s%n", usNumbers.format(payment));
        System.out.printf("India: %s%n", indiaNumbers.format(payment));
        System.out.printf("China: %s%n", chNumbers.format(payment));
        System.out.printf("France: %s%n", frNumbers.format(payment));
    }
}

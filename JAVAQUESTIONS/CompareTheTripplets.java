package JAVAQUESTIONS;

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;
import java.util.stream.Stream;

import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

/*

alice =  a = (a[0], a[1], a[2])

If a[i] > b[i], alice +1 point
If a[i] < b[i], bob +1 point
If a[i] = b[i], no one gets points

bob = b =  (b[0], b[1], b[2])


returns the array = [alice score, bob score]
* */

public class CompareTheTripplets {

    // Complete the compareTriplets function below.
    static List<Integer> CompareTheTripplets(List<Integer> a, List<Integer> b) {

        // resultant List which will store alice & bob scores
        List<Integer> scores = new ArrayList<>();

        // intialize both alice's & bob's score to 0
        int aliceScore = 0;
        int bobScore = 0;

        // iterate both the lists a, b
        // can take any of the sizes as compare condition since both sizes are 3
        for (int i=0; i<a.size(); i++){
            if(a.get(i) > b.get(i)){
                aliceScore += 1;
            }
            else if(b.get(i) > a.get(i)) {
                bobScore += 1;
            }
        }

        // first we will add alice's score to scores list
        scores.add(aliceScore);

        // now add bob's score to scores list
        scores.add(bobScore);

        // scores = [alicesScore, bobScore]
        return scores;
    }

}

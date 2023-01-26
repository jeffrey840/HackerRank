package JAVAQUESTIONS;

import java.util.List;

public class MiniMaxSum {
/*
find the smallest value in the array and find the biggest value in the array

the biggest value will be subtracted from the total in the array
which will result in the smallest int

the smallest value will be subtracted from the total in the array
which will result in the biggest int

miniMinSum 4/5 elements = [1,3,5,7] =16, ignores 9
miniMaxSum 4/5 elements = [3,5,7,9] = 24, ignore 1
* */

    public static void miniMaxSum(List<Integer> arr) {
        // Write your code here
        long sum=0;
        long max=Long.MIN_VALUE;
        long min=Long.MAX_VALUE;
        for(int i=0;i<arr.size();i++){
            sum+=arr.get(i);
        }
        for(int i=0;i<arr.size();i++){
            long tot=sum-arr.get(i);

            if(tot>max){
                max=tot;
            }
            if(tot<min){
                min=tot;
            }
        }
        System.out.println(min+" "+max);
    }
}

package Java;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

class Quickstart{
    static int digit(int n) {
		ArrayList<Integer> seq = new ArrayList<>();
		for (int i = 1; i < n/2; i++) {
			for (int j = 1; j <= i; j++) {
				seq.add(j);
			}
		}
		return seq.get(n - 1);
	}
	
	static int football(int n) {
		ArrayList<Integer> scoreList = new ArrayList<>();
		for (int i = 0; i < n; i++) {
			List<String> x = new ArrayList<>();
			int score = 0;
			Scanner input = new Scanner(System.in);
			x = Arrays.asList((input.nextLine()).split(" "));
			score += Integer.parseInt(x.get(0)) * 3;
			score += Integer.parseInt(x.get(1));
			scoreList.add(score);
            input.close();
		}
		return Collections.max(scoreList);
	}
	
	static int anagram(int n) {
		int count = 0;
		for (int i = 0; i < n; i++) {
			List<String> x = new ArrayList<>();
			Scanner input = new Scanner(System.in);
			x = Arrays.asList((input.nextLine()).split(""));
			List<String> number1 = x.subList(0, x.indexOf(" "));
			List<String> number2 = x.subList(x.indexOf(" "), x.size());
			int count2 = 0;
			for (int j = 0; j < number1.size(); j++) {
				if (number2.contains(number1.get(j))) {
					count2++;
				}
			}
			if (count2 == number1.size()) {
				count++;
			}
			input.close();
		}
		return count;
	}
	
	static int sum(int a, int b, int c) {
		List<Integer> x = new ArrayList<>();
		x.add(a); x.add(b); x.add(c);
		x.set(x.indexOf(Collections.max(x)), (int) Math.pow(Collections.max(x), 2));
		int count = 0;
		for (int i = 0; i < 3; i++) {
			count += x.get(i);
		}
		return count;
	}
	
	static int lcm(int a, int b) {
		int max = Math.max(a, b);
	    int min = Math.min(a, b);

	    for (int i = max; ; i += max) {
	        if (i % min == 0) {
	            return i;
	        }
	    }
	}
    public static void main(String[] args) {
        System.out.println(lcm(2, 3));
    }
}


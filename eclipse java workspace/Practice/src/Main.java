import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Main {
	static String mergeAlternately(String word1, String word2) {
        if (word1.length() < 2) {
        	return word1 + word2;
        } else {
        	if (word2.length() < 2) {
        		return word1.substring(0,1) + word2.substring(0) + mergeAlternately(word1.substring(1), "");
        	} else {
        	return word1.substring(0,1) + word2.substring(0,1) + mergeAlternately(word1.substring(1), word2.substring(1));
        	}
        }
	}
	
	static void gcdOfStrings(String str1, String str2) {
        StringBuilder x = new StringBuilder();
        int minLength = Math.min(str1.length(), str2.length());
        for (int i = 0; i < minLength; i++) {
        	if (str1.substring(i, i + 1).equals(str2.substring(i, i + 1))) {
        		x.append(str1.substring(i, i + 1));
        	} else {
        		break;
        	}
        }
       System.out.println(x);
    }
	
	static List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
		int maxOfCandies = Arrays.stream(candies).max().getAsInt();
		List<Boolean> x = new ArrayList<>();
        for (int i: candies) {
        	if (i + extraCandies >= maxOfCandies) {
        		x.add(true);
        	} else {
        		x.add(false);
        	}
        }
        return x;
    }
	
	static boolean canPlaceFlowers(int[] flowerbed, int n) {
        boolean isPlaceable = false;
        int numOfPlacable = 0;
        for (int i = 0; i < flowerbed.length - 1; i++) {
        	if (isPlaceable == true && flowerbed[i] != 1 && flowerbed[i + 1] != 1 && flowerbed[i - 1] != 1) {
        		numOfPlacable += 1;
        		isPlaceable = false;
        		break;
        		
        	}
        	if (flowerbed[i] == 0) {
        		isPlaceable = true;
        	}
        }
        boolean res = (n == numOfPlacable) ? true : false;
        return res;
    }
	
	static String reverseVowels(String s) {
		String vowel = "aeiou";
		List<String> listOfVowels = new ArrayList<>();
        for (int i = 0; i < s.length(); i++) {
        	String charI = s.substring(i, i + 1);
        	if (vowel.contains(charI)) {
        		listOfVowels.add(charI);  
        	}
        }
        int lenOfList = listOfVowels.size();
        int i = 0;
        while (Math.floorDiv(lenOfList, 2) > 0) {
        	Collections.swap(listOfVowels, i, lenOfList - 1 - i);
        	lenOfList--;
        }
        int vowelAdd = 0;
        for (int j = 0; j < s.length(); j++) {
        	String charI = s.substring(j, j + 1);
        	if (vowel.contains(charI)) {
        		 s = s.replace(s.substring(j, j + 1), listOfVowels.get(vowelAdd));
        		vowelAdd++;
        	}
        }
        return s;
    }
	
	static String reverseWords(String s) {
        String[] listOfWords = s.strip().split(" ");
        StringBuilder x = new StringBuilder();
        for (int i = listOfWords.length - 1; i >= 0; i--) {
        	x.append(listOfWords[i]);
        	x.append(" ");
        }
        return x.toString().trim().replaceAll(" +", " ");
    }
	
	static boolean increasingTriplet(int[] nums) {
        for (int i = 0; i < nums.length - 3; i++) {
        	int j = i + 1;
        	int k = j + 1;
        	if (nums[i] < nums[j] && nums[j] < nums[k]) {
        		return true;
        	}
        }
        return false;
    }
	
	static void moveZeroes(int[] nums) {
        for (int i = 0; i < nums.length; i++) {
        	if (nums[i] == 0) {
        		
        	}
        }
    }
	
	public static void main(String[] args) {
		String x = "a good   example";
		System.out.println(reverseWords(x));
		
	}
}
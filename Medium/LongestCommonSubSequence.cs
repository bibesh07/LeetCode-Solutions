//Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

//A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

//For example, "ace" is a subsequence of "abcde".
//A common subsequence of two strings is a subsequence that is common to both strings.

public class Solution {
    public int LongestCommonSubsequence(string text1, string text2) {
        int[,] table = new int[text1.Length+1, text2.Length+1];
        int answer = 0;
        
        for (int i=0;i<=text1.Length;i++) {
            for (int j=0;j<=text2.Length;j++) {
                if (!(i == 0 || j == 0)) {
                    table[i,j] = (text1[i-1] == text2[j-1]) ? table[i-1,j-1] + 1 : Math.Max(table[i, j-1], table[i-1, j]);
                    answer = Math.Max(table[i,j], answer); 
                }
            }   
        }
        
        return answer;
    }    
}

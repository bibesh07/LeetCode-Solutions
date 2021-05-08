//Given two strings ‘X’ and ‘Y’, find the length of the longest common substring. 

using System;

class MainClass {
  public static void Main (string[] args) {
    Console.WriteLine ("Longest common substring is " + LongestCommonSubString("GreekForGeeks", "IamaGeek"));
  }

  private static int LongestCommonSubString(string s1, string s2) {
    int [,] table = new int[s1.Length+1, s2.Length+1];
    int result = 0;

    for (int i=0; i<=s1.Length;i++) {
      for (int j=0; j<=s2.Length;j++) {
        if (!(i == 0 || j ==0)) {
          if (s1[i-1] == s2[j-1]) {
            table[i,j] = table[i-1, j-1] + 1;
            result = Math.Max(result,table[i,j]);
          }
        }
      } 
    }

    return result;
  }
}

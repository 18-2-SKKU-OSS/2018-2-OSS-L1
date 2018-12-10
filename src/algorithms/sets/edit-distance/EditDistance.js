/**
 * @param {string[]} set1
 * @param {string[]} set2
 * @return {string[]}
 */
export default function editDistance(set1, set2) {
  let dp[][] = new int[m+1][n+1]; 
  for (let i=0; i<=m; i++) 
    { 
      for (let j=0; j<=n; j++) 
      { 
        if (i==0) 
          dp[i][j] = j;  
        else if (j==0) 
          dp[i][j] = i; 
        else if (set1.charAt(i-1) == set2.charAt(j-1)) 
          dp[i][j] = dp[i-1][j-1]; 
        else
          dp[i][j] = 1 + min(dp[i][j-1],  
                             dp[i-1][j],  
                             dp[i-1][j-1]); 
      } 
    } 
  return dp[m][n]; 
}

function min (x, y, z) {
  if (x <= y && x <= z) return x;
  if (y <= x && y <= z) return y;
  else return z;
}
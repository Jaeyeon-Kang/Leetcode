/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
    if (n <= 2) return n;
    
    let dp = [0, 1, 2, 3, ]; // dp[1] = 1, dp[2] = 2 설정
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]; // 점화식을 사용해서 방법의 수 계산
        
    }
    
    return dp[n];
}

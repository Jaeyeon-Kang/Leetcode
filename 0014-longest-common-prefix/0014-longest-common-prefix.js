/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
    if (!strs.length) return "";

    // 첫 번째 문자열을 기준으로 설정
    let prefix = strs[0];

    // 나머지 문자열들과 비교
    for (let i = 1; i < strs.length; i++) {
        // prefix가 strs[i]에 포함되지 않을 때까지 줄여나감
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (!prefix) return ""; // 공통 접두사가 없으면 빈 문자열 반환
        }
    }

    return prefix;
}
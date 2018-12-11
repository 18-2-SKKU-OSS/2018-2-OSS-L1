# 이진 탐색

컴퓨터 과학에서 절반 간격 검색, 대수 검색 또는 바이너리 찹이라고도 알려진 이진 탐색은 정렬 된 배열 내에서 대상 값의 위치를 ​​찾는 탐색 알고리즘이다. 먼저, 이진 탐색은 목표 값을 배열의 중간 요소와 비교한다. 만약 두 값이 같지 않다면, 목표 값이 존재할 수 없는 절반의 구간은 탐색하지 않고 나머지 절반에서 목표 값을 찾을 때까지 탐색이 계속된다. 남은 절반이 비어있는 상태에서 검색이 끝나면 목표 값은 주어진 배열에 존재하지 않는다.

![Binary Search](https://upload.wikimedia.org/wikipedia/commons/8/83/Binary_Search_Depiction.svg)

## 복잡도

**시간 복잡도**: `O(log(n))` - 매번 반복문 실행 시 탐색 영역을 두 부분으로 나누므로

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_algorithm)
- [YouTube](https://www.youtube.com/watch?v=P3YID7liBug&index=29&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
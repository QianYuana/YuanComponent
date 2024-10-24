---
toc: content
order: 7
title: 双指针概念
group:
  title: 双指针
nav:
  title: 算法
  path: /algorithm
  order: 3
---

# 双指针

`双指针`是一种应用很广泛且基础的算法，严格来说双指针不是算法更像是一种思想。双指针中的`“指针”` 不仅仅是大家所熟知的`C/C++`里面的地址指针，还是索引、游标。本文将会简单介绍双指针及双指针的`四种常用模型`，用于双指针入门参考学习。

## 双指针的核心思想

`双指针是指在遍历对象时，使用两个或多个指针进行遍历及相应的操作。`大多用于数组操作，这利用了数组连序性的特点。双指针常用来降低算法的时间复杂度，因为使用两个指针可以避免多层循环。

## 双指针的关键点

- 指针的起始位置的选取
- 指针的移动方向
- 指针的移动速度

**这三个关键点是双指针算法的核心也是难点，**

## 双指针的定义

`双指针`，指的是在遍历对象的过程中，不是普通的使用单个指针进行访问，而是使用两个`相同方向（快慢指针`）或者`相反方向（对撞指针）`的指针进行扫描，从而达到相应的目的。
换言之，双指针法充分使用了数组有序这一特征，从而在某些情况下能够简化一些运算。

## 对撞指针模型

`对撞指针`是指在`有序数组`中，将指向最左侧的索引定义为`左指针(left)`，最右侧的定义为`右指针(right)`，然后从两头向中间进行数组遍历。  
**对撞数组适用于有序数组，也就是说当你遇到题目给定有序数组时，应该第一时间想到用对撞指针解题。又称二分查找**

**求和**

```ts
function sum(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] > target) {
      right--;
    } else if (arr[left] + arr[right] < target) {
      left++;
    } else if (arr[left] + arr[right] == target) {
      return [left, right];
    }
  }
}
```

**数组反转**

```ts
function reverse(arr) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}
```

## 快慢指针模型

快慢指针也是`双指针`，但是两个指针从同一侧开始遍历数组，将这两个指针分别定义为`快指针（fast）`和`慢指针（slow）`，两个指针以不同的策略移动，直到两个指针的值相等（或其他特殊条件）为止，如`fast每次增长两个`，`slow每次增长一个`。

- **注意** 快慢指针适用于链表。
- **适合场景** 快慢指针适合处理链表类型的问题，尤其是涉及到链表的环、中间节点、倒数第 k 个节点等问题。在这些场景中，快慢指针可以有效地遍历链表，并且可以以不同的速度移动，从而找到需要的节点或者判断链表是否有环。
- **应用场景** 例如，判断链表是否有环、找到链表的中间节点、判断链表的交点等问题。

**字符串压缩**

```ts
function compressString(S){
	let newS = '', i = 0, j = 0
	while(j < S.length - 1){
		if(S[j]!==S[j+1]){
			newS += S[i]+(j-i+1)
			i = j+1
		}
		j++
	}
	newS += S[i]+(j-i+1)
	return newS.length<S.length?S
}

```

## 滑动窗口模型

**滑动窗口：左右两个指针组成一个"窗口",右指针不断扩张，左指针按条件收缩。**  
在力扣上刷题时经常可以看到这样的题，求 XXX 的子串、子数组、子序列等等，这类题一般使用滑动窗口来解决。

**情况一：寻找最长的**  
① 初始化左右指针 left 和 right，左右指针之间的内容就是窗口，定义一个变量 result 记录当前的滑动窗口的结果，定义一个变量 bestResult 记录当前滑动窗口下的最优结果  
②right 要向右逐位滑动循环  
③ 每次滑动后，记录当前滑动的结果。如果当前的结果符合条件，则更新最优的结果，然后 right 要继续向右滑动；如果当前的结果不符合条件，那么要让 left 逐步收缩  
④ 当 right 到达结尾时停止滑动

```ts
初始化left，right，result，bestResult
while (右指针没有到结尾) {
    窗口扩大，加入right对应元素，更新当前result
    while (result不满足要求) {
        窗口缩小，移除left对应元素，left右移
    }
    更新最优结果bestResult
    right++;
}
返回bestResult

```

**情况二：寻找最短的**  
① 初始化左右指针 left 和 right，左右指针之间的内容就是窗口，定义一个变量 result 记录当前的滑动窗口的结果，定义一个变量 bestResult 记录当前滑动窗口下的最优结果  
②right 要向右逐位滑动循环  
③ 每次滑动后，记录当前滑动的结果。如果当前的结果符合条件，则更新最优的结果，然后 right 要继续向右滑动；如果当前的结果不符合条件，那么要让 left 逐步收缩  
④ 当 right 到达结尾时停止滑动

```ts
初始化left，right，result，bestResult
while (右指针没有到结尾) {
    窗口扩大，加入right对应元素，更新当前result
    while (result不满足要求) {
    	更新最优结果bestResult
        窗口缩小，移除left对应元素，left右移
    }
    right++;
}
返回bestResult

```

## 归并排序模型

**归并排序**是将一个数组分成两个子数组，分别对这两个子数组进行排序，然后将两个有序子数组合并成一个有序数组。

**合并两个有序数组**  
给你两个按 非递减顺序 排列的整数数组 `nums1` 和 `nums2`，另有两个整数 `m` 和 `n` ，分别表示 `nums1` 和 `nums2` 中的元素数目。  
请你 合并 `nums2` 到 `nums1` 中，使合并后的数组同样按 `非递减顺序` 排列。  
注意：最终，合并后数组不应由函数返回，而是存储在数组 `nums1` 中。为了应对这种情况，`nums1` 的初始长度为 `m + n`，其中前 `m` 个元素表示应合并的元素，后 `n`个元素为 `0` ，应忽略。`nums2` 的长度为 `n` 。

**示例 1 ：**

```ts
输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
解释：需要合并 [1,2,3] 和 [2,5,6] 。
合并结果是 [1,2,2,3,5,6] 。
```

**示例 2 ：**

```ts
输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]
解释：需要合并 [1] 和 [] 。
合并结果是 [1] 。
```

**示例 3 ：**

```ts
输入：nums1 = [0], m = 0, nums2 = [1], n = 1
输出：[1]
解释：需要合并的数组是 [] 和 [1] 。
合并结果是 [1] 。
注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。
```

**提示**

```ts
nums1.length == m + n;
nums2.length == n;
0 <= m, n <= 200;
1 <= m + n <= 200 - 109 <= nums1[i], nums2[j] <= 109;
```

**解法**

```ts
function merge(nums1: number[], m: number, nums2: number[], n: number) {
  let e = nums1.length - 1; //指向nums1末尾
  let mi = m - 1; //指向nums1最后
  let ni = n - 1; //指向nums2最后

  while (mi >= 0 && ni >= 0) {
    if (nums1[mi] > nums2[ni]) {
      //最大值移动到末尾
      nums1[e] = nums1[mi];
      mi--;
    } else {
      nums1[e] = nums2[ni];
      ni--;
    }
    //末尾指针左移
    e--;
  }

  //nums2为空
  while (mi >= 0) {
    nums1[e] = nums1[mi];
    mi--;
    e--;
  }

  //nums1为空（均为0）
  while (ni >= 0) {
    nums1[e] = nums2[ni];
    ni--;
    e--;
  }

  return nums1;
}
```

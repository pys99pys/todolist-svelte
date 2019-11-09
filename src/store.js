import { writable } from "svelte/store";

export const items = writable([
  {
    id: 1,
    content: "스벨트 설치 후 간단하게 사용해보기",
    createdAt: "2019-11-08 15:20:59",
    done: true
  },
  {
    id: 2,
    content: "스벨트에 대해 더 공부해보기",
    createdAt: "2019-11-09 02:16:25",
    done: false
  },
  {
    id: 3,
    content: "스벨트를 사용하여 정적 사이트 배포해보기",
    createdAt: "2019-11-09 03:30:39",
    done: false
  }
]);

export const orderby = writable("id");

<script>
  import { items } from "../store";

  let remainText = 0;
  items.subscribe(value => {
    if (value.length === 0) {
      remainText = "등록된 할 일이 없습니다.";
    } else {
      const { length } = value.filter(({ done }) => !done);
      remainText =
        length === 0
          ? `모든 할 일을 완료했습니다.`
          : `${length}개의 할 일이 남았습니다.`;
    }
  });
</script>

<style lang="scss">
  @import "../styles/variables";

  header {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: map-get($colors, primary);
    color: white;

    h1 {
      font-size: 2rem;
      font-weight: map-get($sizes, font-weight-bold);
    }

    p {
      margin-top: 0.75rem;
      display: block;
      font-size: 0.925rem;
    }
  }
</style>

<header>
  <h1>오늘 할 일</h1>
  <p>{remainText}</p>
</header>

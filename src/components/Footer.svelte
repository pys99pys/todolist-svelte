<script>
  import { items, orderby } from "../store";

  let allDone = false;
  items.subscribe(value => {
    if (value.length === 0) {
      allDone = false;
      return;
    }
    allDone = value.filter(({ done }) => !done).length === 0;
  });

  const onClickAllCheckButton = () => {
    $items = $items.map(item => ({
      ...item,
      done: !allDone
    }));
  };

  const onChangeOrderby = nextOrderby => {
    $orderby = nextOrderby;
  };
</script>

<style lang="scss">
  @import "../styles/variables";

  footer {
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid map-get($colors, border);

    button {
      height: 40px;
      margin: 0;
      padding: 0 1.25rem;
      border: none;
      border-radius: 40px;
      background-color: map-get($colors, light-gray);
      font-size: 0.85rem;
      transition: background-color 500ms, color 500ms ease;

      &.active {
        background-color: map-get($colors, primary) !important;
        color: white;
      }

      &:hover {
        background-color: darken(map-get($colors, light-gray), 5);
        cursor: pointer;
      }
    }

    .orderby-wrap {
      display: flex;
      position: relative;

      button {
        margin-left: 0.5rem;
      }
    }
  }
</style>

<footer>
  <button
    class={`all-check-button ${allDone ? 'active' : ''}`}
    on:click={onClickAllCheckButton}>
    전체 완료
  </button>
  <div class="orderby-wrap">
    <button
      class={$orderby === 'id' ? 'active' : ''}
      on:click={() => onChangeOrderby('id')}>
      등록일순
    </button>
    <button
      class={$orderby === 'content' ? 'active' : ''}
      on:click={() => onChangeOrderby('content')}>
      할 일순
    </button>
  </div>
</footer>

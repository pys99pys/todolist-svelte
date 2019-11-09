<script>
  import { items, orderby } from "../store";

  let sortedItems = [];
  items.subscribe(value => {
    sortedItems = value;
  });

  orderby.subscribe(value => {
    sortedItems = sortedItems.sort((a, b) => {
      if (a[value] < b[value]) {
        return -1;
      }
      if (a[value] > b[value]) {
        return 1;
      }
      return 0;
    });
  });

  const onClickRow = id => {
    $items = $items.map(item =>
      item.id === id
        ? {
            ...item,
            done: !item.done
          }
        : item
    );
  };

  const onRemove = id => {
    $items = $items.filter(({ id: itemId }) => itemId !== id);
  };
</script>

<style lang="scss">
  @import "../styles/variables";

  ul {
    flex: 1;

    li {
      display: flex;
      align-items: center;
      position: relative;
      padding: 1.5rem;
      border-bottom: 1px solid map-get($colors, border);
      transition: background-color 500ms ease;

      .done-mark {
        width: 42px;
        height: 28px;
        margin-right: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 28px;
        background-color: map-get($colors, gray);
        font-size: 0.895rem;
        color: white;
      }

      .content-wrap {
        flex: 1;

        time {
          margin-top: 0.65rem;
          display: block;
          font-family: sans-serif;
          font-size: 0.925rem;
          color: map-get($colors, gray);
        }
      }

      .button-wrap {
        margin-left: 1rem;
        display: none;

        button {
          width: 48px;
          height: 32px;
          margin: 0;
          border: none;
          border-radius: 32px;
          background-color: map-get($colors, primary);
          font-size: 0.895rem;
          color: white;
          transition: background-color 500ms ease;

          &:hover {
            background-color: darken(map-get($colors, primary), 10);
            cursor: pointer;
          }
        }
      }

      &:hover {
        background-color: #f2f2f2;
        cursor: pointer;

        .button-wrap {
          display: block;
        }
      }

      &.done {
        background-color: #f2f2f2;
      }
    }
  }
</style>

<ul>
  {#each sortedItems as item}
    <li class={item.done ? 'done' : ''} on:click={() => onClickRow(item.id)}>
      {#if item.done}
        <div class="done-mark">완료</div>
      {/if}
      <div class="content-wrap">
        <p>{item.content}</p>
        <time>{item.createdAt}</time>
      </div>
      <div class="button-wrap">
        <button
          on:click={e => {
            e.stopPropagation();
            onRemove(item.id);
          }}>
          삭제
        </button>
      </div>
    </li>
  {/each}
</ul>

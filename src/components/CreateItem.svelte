<script>
  import moment from "moment";
  import { items } from "../store";

  let value = "";
  let error = false;

  const onSubmit = () => {
    if (!value) {
      error = true;
      return;
    }

    $items = $items.concat({
      id: +new Date(),
      content: value,
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      done: false
    });

    value = "";
  };

  const onKeyup = e => {
    error = false;
    if (e.key == "Enter") {
      onSubmit();
    }
  };
</script>

<style lang="scss">
  @import "../styles/variables";

  input {
    width: 100%;
    margin: 0;
    padding: 1.5rem;
    border: none;
    border-bottom: 1px solid map-get($colors, border);
    background-color: #f5f5f5;

    &.error {
      &::placeholder {
        color: map-get($colors, primary);
      }
    }
  }
</style>

<input
  class={error ? 'error' : ''}
  placeholder="할 일 입력 후 엔터를 눌러 등록해주세요."
  bind:value
  on:keyup={onKeyup} />

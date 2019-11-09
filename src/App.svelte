<script>
  import Header from "./components/Header.svelte";
  import CreateItem from "./components/CreateItem.svelte";
  import Items from "./components/Items.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<style lang="scss">
  @import "./styles/variables";

  :global() {
    @import "./styles/app.scss";
  }

  .container {
    width: 600px;
    height: 80vh;
    display: flex;
    flex-direction: column;
    border-radius: 2px;
    background-color: white;
    box-shadow: 0 0 10px #ddd;
    overflow: hidden;
  }
</style>

<div class="app">
  <div class="container">
    <Header />
    <CreateItem />
    <Items />
    <Footer />
  </div>

</div>

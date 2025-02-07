<script>
  let password = "";
  let isAuthenticated = false;
  const correctPassword = "secret123";

  function checkPassword() {
    if (password === correctPassword) {
      isAuthenticated = true;
    } else {
      alert("Incorrect password. Try again.");
    }
  }
</script>

{#if isAuthenticated}
  <h1>Welcome to the Memebers Only Page</h1>
  <p>This content is protected.</p>
{:else}
  <div class="lock-screen">
    <h2>Enter Password to Unlock</h2>
    <input type="password" bind:value={password} placeholder="Enter password" />
    <button on:click={checkPassword}>Submit</button>
  </div>
{/if}

<style>
  .lock-screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }
  input, button {
    margin: 5px;
    padding: 8px;
  }
</style>

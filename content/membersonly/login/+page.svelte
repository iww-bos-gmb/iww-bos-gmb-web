<script>
    let password = '';
    let errorMessage = '';

    async function handleSubmit(event) {
        event.preventDefault();

        const res = await fetch('/protected/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password })
        });

        if (res.ok) {
            window.location.href = '/protected'; // Redirect to Markdown page
        } else {
            errorMessage = 'Incorrect password!';
        }
    }
</script>

<form on:submit={handleSubmit}>
    <input type="password" bind:value={password} placeholder="Enter password" required />
    <button type="submit">Login</button>
    {#if errorMessage}
        <p style="color: red;">{errorMessage}</p>
    {/if}
</form>

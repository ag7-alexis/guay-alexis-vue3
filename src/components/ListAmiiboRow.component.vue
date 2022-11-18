<script setup>
defineProps(['amiibo'])
console.log($attrs)
</script>

<template>

    <tr>
        <td>{{ amiibo.character }}</td>
        <td>{{ amiibo.gameSeries }}</td>
        <td>
            <RouterLink :to="{ name: 'DetailsAmiibo', params: { amiiboTail: amiibo.tail } }">
                <button>👀</button>
            </RouterLink>
        </td>
    </tr>

</template>

<style scoped>

</style>
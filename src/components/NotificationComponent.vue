<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div
        class="absolute top-0 right-0 -translate-x-6 translate-y-12 z-20 cursor-pointer p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div>
            <div class="text-xl font-medium text-black">{{ title }}</div>
            <p class="text-slate-500">{{ body }}</p>
        </div>
        <slot></slot>
    </div>
</template>

<template>
    <div>
        <a 
        class="font-medium text-indigo-600 hover:text-indigo-500"
        :href="href"
        
        >
            <slot />
        </a>
    </div>
</template>

<script>
export default {
    props:{
        href: {
            type: String,
            reaquired: false,
            default: '#'
        }
    }
}
</script>
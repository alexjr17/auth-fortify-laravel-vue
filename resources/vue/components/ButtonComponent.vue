<template>
    <button
    class="inline-flex items-center px-4 py-2 border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    :class="`text-${textColor} hover:text-${hoverTextColor} rounded-${rounded} bg-${bgColor}-500 hover:bg-${bgColor}-600 border-${bgColor}-300`"
    :type="type"
    >
        <slot />
    </button>
</template>

<script>
export default {
    props:{
        type: {
            type: String,
            required: false,
            default: 'button'
        },
        rounded:{
            type: String,
            required: false,
            default: 'md'
        },
        bgColor:{
            type: String,
            required: false,
            default: 'blue'
        },
        textColor:{
            type: String,
            required: false,
            default: 'gry'
        },
        hoverTextColor:{
            type: String,
            required: false,
            default: 'white'
        }
    }
}
</script>
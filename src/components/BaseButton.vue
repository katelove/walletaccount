<template lang="">
    <button
        :class="[bg,textColor,borderRadius,textSize]"
        class="hover:bg-hoverOrange w-full h-[44px]"
        @click="$emit('click')"
    >
        <slot />
    </button>
</template>
<script>
export default {
    name: "BaseButton",
    props: {
        bg: {
            default: "bg-orange",
            type: String,
        },
        textColor: {
            default: "text-white",
            type: String
        },
        borderRadius: {
            default: "rounded-[8px]",
            type: String
        },
        textSize: {
            default: "text-[16px]",
            type: String
        },

    },
};
</script>


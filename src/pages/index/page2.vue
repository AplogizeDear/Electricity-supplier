<template>
    <div class="page2">
        <div>这里是page2</div>
    </div>
</template>

<script>
    export default {
        name: "page2"
    }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
    @import '../../common/stylus/mixin.styl'
    .page2
        width 100%
        height:562px;
        background purple
        display flex
        justify-content center
        align-items  center
        color #fff
        font-size 30px
        font-weight 700

</style>
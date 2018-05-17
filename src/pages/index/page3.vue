<template>
    <div class="page3">
        <div>这里是page3</div>
    </div>
</template>

<script>
    export default {
        name: "page3"
    }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
    @import '../../common/stylus/mixin.styl'
    .page3
        width 100%
        height:562px;
        background blue
        display flex
        justify-content center
        align-items  center
        color #fff
        font-size 30px
        font-weight 700

</style>
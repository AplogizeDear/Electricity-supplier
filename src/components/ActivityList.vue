<template lang="html">
    <div class="activity-wrapper border-line"  ref="activityWrapper" >
        <ul class="activity-products">
            <li v-for="(item, index) in activityList" :key="index" class="activity-product" @click="findProduct(item.id)">
                <span class="discount">{{item.discount}}<span>折</span></span>
                <div class="product-img">
                    <img :src="item.imgs[0]" alt="">
                </div>
                <div class="product-detail">
                    <div class="product-title">{{item.title}}</div>
                    <div class="price-wrap">
                        <span class="jumei-price">￥{{item.nowPrice}}</span>
                        <span class="del-price price-line">￥{{item.oldPrice}}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import BScroll from 'better-scroll'
    export default {
        data(){
            return {

            }
        },
        name: "ActivityList",
        computed: {
            // 放在计算属性内部
            activityList () {
                return this.$store.state.activityList
            }
        },
        created () {
            this.$nextTick(() => {
                this.activityScroll = new BScroll(this.$refs.activityWrapper, {
                    click: true,
                    scrollX: true
                })
            })
        },
        methods: {
            findProduct(id) {
                let isfind = false
                // 可以进行async异步处理
                axios.get("/api/data").then(res => {
                    this.$store.dispatch('productInfo', res.data.activityLists[id-1])
                    // 在这里添加路由就不会出现调整页面的数据替换 异步
                    this.$router.push({name:"product", params: {id:id}})
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>

</style>